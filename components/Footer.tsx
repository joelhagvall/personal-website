import {LinkedinIcon, MailIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { motion } from "framer-motion";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="col-span-3 mt-8 border-t border-primary/10"
    >
      <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-2">Joel Hägvall</h2>
          <p className="text-sm text-muted-foreground">
            Software Developer based in Sweden.
          </p>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com/joelhagvall" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-muted-foreground hover:text-primary transition-colors"
             aria-label="GitHub">
            <GitHubLogoIcon className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/joel-h%C3%A4gvall-810601147/" 
             target="_blank" 
             rel="noopener noreferrer"
             className="text-muted-foreground hover:text-primary transition-colors"
             aria-label="LinkedIn">
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <Popover>
            <PopoverTrigger asChild>
              <div className="flex items-center space-x-2 text-muted-foreground hover:text-primary cursor-pointer">
                <MailIcon size={20} />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-60 bg-primary/5 border-primary/10">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Open Mail App?</h4>
                <p className="text-sm text-muted-foreground">
                  This will open your default email application to send a message to joel.hagvall1@gmail.com
                </p>
                <br></br>
                <a
                  href="mailto:joel.hagvall1@gmail.com"
                  className="block w-full text-center mt-2 text-sm text-primary hover:underline"
                >
                  Continue
                </a>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} • Built with Next.js
        </div>
      </div>
    </motion.div>
  );
}