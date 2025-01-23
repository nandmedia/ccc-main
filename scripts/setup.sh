#!/bin/bash

# Install Terraform
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
sudo apt-get update && sudo apt-get install terraform

# Install Ansible
sudo apt-get install -y ansible

# Setup infrastructure
cd infrastructure/terraform
terraform init
terraform apply -auto-approve

# Configure server
cd ../ansible
ansible-playbook -i inventory.yml playbook.yml