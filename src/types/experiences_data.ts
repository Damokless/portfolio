export interface Experiences {
    company: string;
    logo: string;
    experiences: [
        {
            role: string;
            location: string;
            start: Date;
            end: Date | null;
            employment_type: string;
            description: string;
            seo_sea_focus: string;
        },
    ];
}
