import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card";

import { 
    Calendar, 
    ClipboardList, 
    TrendingUp, 
    History, 
    CalendarDays, 
    Target 
} from "lucide-react";

const Features = () => {
    const features = [
        {
            icon: ClipboardList,
            title: "Manage Timetable",
            description: "Create, read, update, and delete your class schedule with ease. Manage all your subjects and timings in one place.",
        },
        {
            icon: TrendingUp,
            title: "Current Report",
            description: "Get real-time insights into your attendance status. See which classes need your attention instantly.",
        },
        {
            icon: Calendar,
            title: "Mark Today's Attendance",
            description: "Quick and simple attendance marking. Track your daily presence with just a tap.",
        },
        {
            icon: History,
            title: "Attendance History",
            description: "Review your complete attendance record. Track patterns and identify trends over time.",
        },
        {
            icon: CalendarDays,
            title: "Interactive Calendar",
            description: "Visualize your attendance on a beautiful calendar. Plan ahead and stay organized.",
        },
        {
            icon: Target,
            title: "Smart Strategies",
            description: "Get personalized recommendations to maintain minimum attendance. Never fall below the threshold.",
        },
    ];

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
            <div className="container mx-auto">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
                        Powerful Features
                    </h2>
                    
                    <p className="text-lg text-muted-foreground">
                        Everything you need to stay on top of your attendance game
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <Card 
                                key={index} 
                                className="group border-border bg-zinc-900/90 backdrop-blur-sm transition-all hover:bg-zinc-900/95"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <CardHeader>
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/10 text-blue-600 transition-all">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <CardTitle className="text-xl text-white">
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent>
                                    <CardDescription className="text-base text-zinc-300">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Features