import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function SecurityPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Security Policy</h1>
        <p className="text-lg text-muted-foreground">
          I take security seriously and welcome responsible disclosure of vulnerabilities.
        </p>
      </div>

      <div className="space-y-6">
        {/* Responsible Disclosure */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Badge variant="destructive">Security</Badge>
              Responsible Disclosure
            </CardTitle>
            <CardDescription>
              How to report security vulnerabilities responsibly
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              I appreciate security researchers who help me maintain the security and privacy of my website visitors. 
              If you discover a security vulnerability, I encourage you to report it to me responsibly.
            </p>
            
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">What to report:</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Cross-site scripting (XSS)</li>
                <li>SQL injection</li>
                <li>Authentication bypass</li>
                <li>Data exposure</li>
                <li>Privilege escalation</li>
                <li>Any other security-related issues</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How to Report */}
        <Card>
          <CardHeader>
            <CardTitle>How to Report</CardTitle>
            <CardDescription>
              Steps to follow when reporting a security vulnerability
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="mt-1">1</Badge>
                <div>
                  <h4 className="font-semibold">Email me directly</h4>
                  <p className="text-sm text-muted-foreground">
                    Send your report to: <a href="mailto:joel.hagvall1@gmail.com" className="text-primary hover:underline">joel.hagvall1@gmail.com</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="mt-1">2</Badge>
                <div>
                  <h4 className="font-semibold">Include detailed information</h4>
                  <p className="text-sm text-muted-foreground">
                    Provide a clear description of the vulnerability, steps to reproduce, and potential impact.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="mt-1">3</Badge>
                <div>
                  <h4 className="font-semibold">Allow time for response</h4>
                  <p className="text-sm text-muted-foreground">
                    I will acknowledge your report within 48 hours and provide updates on my progress.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What to Expect */}
        <Card>
          <CardHeader>
            <CardTitle>What to Expect</CardTitle>
            <CardDescription>
              My response process and timeline
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">48 hours</h4>
                  <p className="text-sm text-muted-foreground">
                    Initial acknowledgment of your report
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">1-2 weeks</h4>
                  <p className="text-sm text-muted-foreground">
                    Assessment and validation of the vulnerability
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">2-4 weeks</h4>
                  <p className="text-sm text-muted-foreground">
                    Fix development and testing
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Upon fix</h4>
                  <p className="text-sm text-muted-foreground">
                    Public disclosure and acknowledgment
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Guidelines */}
        <Card>
          <CardHeader>
            <CardTitle>Guidelines</CardTitle>
            <CardDescription>
              Important guidelines for security researchers
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1">✓</Badge>
                <div>
                  <h4 className="font-semibold">Do</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Test only on your own accounts or with explicit permission</li>
                    <li>• Avoid accessing or modifying other users' data</li>
                    <li>• Use the provided contact method for reporting</li>
                    <li>• Provide sufficient detail to reproduce the issue</li>
                  </ul>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex items-start gap-3">
                <Badge variant="destructive" className="mt-1">✗</Badge>
                <div>
                  <h4 className="font-semibold">Don't</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Perform actions that could harm the service or other users</li>
                    <li>• Access, modify, or delete data that doesn't belong to you</li>
                    <li>• Disclose the vulnerability publicly before we've had time to fix it</li>
                    <li>• Use automated tools that could impact service performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recognition */}
        <Card>
          <CardHeader>
            <CardTitle>Recognition</CardTitle>
            <CardDescription>
              How we acknowledge security researchers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Security researchers who responsibly disclose vulnerabilities will be acknowledged on this page 
              (with their permission) and may be eligible for recognition in my security hall of fame.
            </p>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              Get in touch for security-related matters
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm">
                <strong>Security Email:</strong> <a href="mailto:joel.hagvall1@gmail.com" className="text-primary hover:underline">joel.hagvall1@gmail.com</a>
              </p>
              <p className="text-sm">
                <strong>Security.txt:</strong> <a href="/.well-known/security.txt" className="text-primary hover:underline">/.well-known/security.txt</a>
              </p>
              <p className="text-sm text-muted-foreground">
                For general inquiries, please use the contact information on my <a href="/about" className="text-primary hover:underline">about page</a>.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
