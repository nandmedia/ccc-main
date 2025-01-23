"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HelpCircle, Calendar, Clock, Users } from "lucide-react";

interface Question {
  id: string;
  author: string;
  content: string;
  votes: number;
  answered: boolean;
}

export function AMASession() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [sessionDate, setSessionDate] = useState<string>("");
  const [sessionTime, setSessionTime] = useState<string>("");

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;

    const question: Question = {
      id: Date.now().toString(),
      author: "Current User", // Replace with actual user
      content: newQuestion,
      votes: 0,
      answered: false,
    };

    setQuestions([...questions, question]);
    setNewQuestion("");
  };

  const handleVote = (questionId: string) => {
    setQuestions(questions.map(q => 
      q.id === questionId ? { ...q, votes: q.votes + 1 } : q
    ));
  };

  const handleMarkAnswered = (questionId: string) => {
    setQuestions(questions.map(q =>
      q.id === questionId ? { ...q, answered: true } : q
    ));
  };

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-zinc-800">
        <h2 className="text-2xl font-semibold text-orange-500 mb-4">Schedule AMA Session</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-sm text-zinc-400 mb-2 block">Date</label>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-orange-500" />
              <Input
                type="date"
                value={sessionDate}
                onChange={(e) => setSessionDate(e.target.value)}
                className="bg-zinc-700 border-zinc-600"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-zinc-400 mb-2 block">Time</label>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-500" />
              <Input
                type="time"
                value={sessionTime}
                onChange={(e) => setSessionTime(e.target.value)}
                className="bg-zinc-700 border-zinc-600"
              />
            </div>
          </div>
        </div>
        <Button className="w-full bg-orange-500 hover:bg-orange-600">
          Schedule Session
        </Button>
      </Card>

      <Card className="p-6 bg-zinc-800">
        <h3 className="text-xl font-semibold text-white mb-4">Submit Questions</h3>
        <form onSubmit={handleSubmitQuestion} className="space-y-4">
          <Input
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Ask your question..."
            className="bg-zinc-700 border-zinc-600"
          />
          <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
            <HelpCircle className="w-4 h-4 mr-2" />
            Submit Question
          </Button>
        </form>
      </Card>

      <div className="space-y-4">
        {questions.map((question) => (
          <Card key={question.id} className={`p-4 ${question.answered ? 'bg-zinc-700' : 'bg-zinc-800'}`}>
            <div className="flex items-start gap-4">
              <Button
                variant="ghost"
                className="flex flex-col"
                onClick={() => handleVote(question.id)}
              >
                <span>▲</span>
                <span>{question.votes}</span>
              </Button>
              <div className="flex-1">
                <p className="text-zinc-300 mb-2">{question.content}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-400">Asked by {question.author}</span>
                  {!question.answered && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleMarkAnswered(question.id)}
                    >
                      Mark as Answered
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}