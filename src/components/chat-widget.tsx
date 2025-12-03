"use client";

import { useState } from "react";
import { MessageSquare, X, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={cn("fixed right-4 bottom-4 z-50 transition-transform duration-300 ease-in-out", isOpen ? 'translate-x-0' : 'translate-x-[calc(100%+2rem)]')}>
        <div className="w-[350px] h-[500px] bg-white/80 backdrop-blur-md shadow-2xl rounded-lg flex flex-col border border-slate-200">
          <header className="p-4 bg-white/50 flex justify-between items-center border-b rounded-t-lg">
            <h3 className="text-lg font-medium text-blue-950">Chat with us</h3>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5 text-slate-500" />
            </Button>
          </header>
          <div className="flex-1 p-4 overflow-y-auto">
            {/* Chat messages will go here */}
            <div className="flex justify-start mb-4">
              <div className="bg-slate-100/80 backdrop-blur-sm text-blue-950 p-3 rounded-lg max-w-[80%]">
                <p className="text-sm">Hello! How can we help you today?</p>
              </div>
            </div>
          </div>
          <footer className="p-4 border-t bg-white/50 rounded-b-lg">
            <div className="flex items-center gap-2">
              <Input placeholder="Type a message..." className="flex-1"/>
              <Button size="icon" className="flex-shrink-0">
                <Send className="h-5 w-5" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </footer>
        </div>
      </div>
      <div className="fixed right-4 bottom-4 z-50">
         <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className={cn(
            "rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 ease-in-out",
            isOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"
          )}
        >
          <MessageSquare className="h-5 w-5" />
          <span>Chat with us</span>
        </Button>
      </div>
    </>
  );
}
