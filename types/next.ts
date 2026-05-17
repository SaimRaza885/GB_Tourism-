export interface PageProps {
    params: Promise<{
        slug?: string;
        id?: string;
        [key: string]: any;
    }>;
}
