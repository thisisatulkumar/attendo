import { Instagram, Github } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border bg-secondary/30 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-muted-foreground">
                        &copy; {currentYear} Attendo. All rights reserved.
                        </p>
                    </div>

                    <div className="flex flex-col items-center gap-4 md:flex-row">
                        <p className="text-sm text-foreground font-medium">
                            Developed by <span className="text-accent">Atul Kumar</span>
                        </p>

                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com/thisisatulkumar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition-all hover:bg-accent hover:scale-110"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5 text-foreground" />
                            </a>

                            <a
                                href="https://github.com/thisisatulkumar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary transition-all hover:bg-accent hover:scale-110"
                                aria-label="GitHub"
                            >
                                <Github className="h-5 w-5 text-foreground" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer