import { Briefcase, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Resume() {
  return (
    <main className="min-h-screen p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Resume
        </h1>

        <div className="space-y-6">
          <div>
            <Card className="p-6 bg-primary/5">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase size={24} aria-hidden="true" />
                Work Experience
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Senior Developer</h3>
                  <p className="text-sm text-muted-foreground">Company Name • 2020-Present</p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li>Achievement 1</li>
                    <li>Achievement 2</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-6 bg-primary/5">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap size={24} aria-hidden="true" />
                Education
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Computer Science Degree</h3>
                  <p className="text-sm text-muted-foreground">University Name • 2014-2018</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
} 
