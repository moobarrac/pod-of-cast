export {};

declare global {
  interface PodcastEpisode {
    podcast: string;
    podcastId: string;
    image: string;
    episode: string;
    title: string;
    id: string;
    description: string;
    tags: string[];
    'release-date': string;
    host: {
      name: string;
      img: string
    };
    featured: boolean;
  }
  interface SponsorPlan {
    name: string;
    description: string;
    price: string;
    benefits: string[];
  }
}