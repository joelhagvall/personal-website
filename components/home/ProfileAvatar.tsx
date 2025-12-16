"use client";

import { ZoomIn } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function ProfileAvatar() {
  return (
    <div className="relative shrink-0">
      <Dialog>
        <DialogTrigger asChild>
          <div className="group relative inline-block rounded-full">
            <button
              aria-label="Open larger profile image"
              className="rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <Avatar className="h-20 w-20 cursor-pointer">
                <AvatarImage src="/media/selfie.jpeg" alt="Joel Hägvall" />
                <AvatarFallback>JH</AvatarFallback>
              </Avatar>
              <span className="pointer-events-none absolute inset-0 rounded-full bg-black/30 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                <ZoomIn className="h-6 w-6 text-white" />
              </span>
            </button>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-2xl p-0 bg-transparent border-0 shadow-none">
          <DialogHeader className="sr-only">
            <DialogTitle>Profile image preview</DialogTitle>
          </DialogHeader>
          <img
            src="/media/selfie.jpeg"
            alt="Joel Hägvall"
            className="w-full h-auto rounded-xl"
          />
        </DialogContent>
      </Dialog>
      <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-400 ring-2 ring-white" />
    </div>
  );
}
