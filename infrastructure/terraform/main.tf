terraform {
  required_providers {
    digitalocean = {
      source = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

provider "digitalocean" {
  token = var.do_token
}

# VPS Instance
resource "digitalocean_droplet" "blockchain_node" {
  image  = "ubuntu-20-04-x64"
  name   = "blockchain-node"
  region = "nyc1"
  size   = "s-2vcpu-4gb"
  ssh_keys = [var.ssh_key_id]

  connection {
    type        = "ssh"
    user        = "root"
    private_key = file(var.ssh_private_key_path)
    host        = self.ipv4_address
  }
}

# Firewall
resource "digitalocean_firewall" "blockchain_firewall" {
  name = "blockchain-firewall"

  droplet_ids = [digitalocean_droplet.blockchain_node.id]

  # SSH
  inbound_rule {
    protocol         = "tcp"
    port_range       = "22"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }

  # HTTPS for RPC
  inbound_rule {
    protocol         = "tcp"
    port_range       = "443"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }

  # P2P
  inbound_rule {
    protocol         = "tcp"
    port_range       = "30303"
    source_addresses = ["0.0.0.0/0", "::/0"]
  }

  # Allow all outbound traffic
  outbound_rule {
    protocol              = "tcp"
    port_range           = "1-65535"
    destination_addresses = ["0.0.0.0/0", "::/0"]
  }
}