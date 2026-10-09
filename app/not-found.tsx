import { Button } from "@/components/ui/Button";
export default function NotFound() {
  return (<div className="py-24"><h1 className="mb-4 font-display text-5xl">Page not found</h1><p className="mb-6 text-mute">That page doesn&apos;t exist. Head back to the projects.</p><Button href="/projects" variant="primary">Back to projects</Button></div>);
}
