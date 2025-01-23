"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, ThumbsUp, Flag } from "lucide-react";

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: Date;
  likes: number;
}

export function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: "Current User", // Replace with actual user
      content: newComment,
      timestamp: new Date(),
      likes: 0,
    };

    setComments([comment, ...comments]);
    setNewComment("");
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-2">
        <Textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="bg-zinc-800 border-zinc-700"
        />
        <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
          <MessageCircle className="w-4 h-4 mr-2" />
          Comment
        </Button>
      </form>

      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-zinc-800 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="font-medium text-white">{comment.author}</span>
              <span className="text-sm text-zinc-400">
                {comment.timestamp.toLocaleDateString()}
              </span>
            </div>
            <p className="text-zinc-300 mb-3">{comment.content}</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">
                <ThumbsUp className="w-4 h-4 mr-1" />
                {comment.likes}
              </Button>
              <Button variant="ghost" size="sm">
                <Flag className="w-4 h-4 mr-1" />
                Report
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}