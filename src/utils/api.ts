import Mind from '../assests/images/mind.png'
import SelfCOnfidence from '../assests/images/selfConfidence.png'
import WomenRight from '../assests/images/womenRight.png'
import SocialClass from '../assests/images/socialClass.png'
import Avatar from '../assests/images/avatar.svg'
import Spotify from '../assests/images/Spotify.svg'
import TeslaCover from '../assests/images/TeslaCover.png'
import HostAvatar from '../assests/images/hostAvatar.png'
import HostAvatar2 from '../assests/images/hostAvatar2.png'
import Scribble1 from '../assests/images/Scribble1.svg';
import ShiningStars from '../assests/images/ShiningStars.svg'
import Smiley from '../assests/images/Smiley.svg';
import Fire from '../assests/images/Fire.svg';
import Star from '../assests/images/Star.svg';
import Face from '../assests/images/Face.svg';

export const data = {
  series: [
    {
      podcast: 'Perplexed Mind',
      id: 'PM-001',
      img: Mind,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos cupiditate facilis ipsa reprehenderit labore ipsam eius sed perferendis.',
      episodes: [
        {
          id: 'PM-ep1',
          episode: 1
        },
        {
          id: 'PM-ep2',
          episode: 2
        },
        {
          id: 'PM-ep3',
          episode: 3
        },
      ]
    },
    {
      podcast: 'Self Confidence',
      id: 'SM-001',
      img: SelfCOnfidence,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos cupiditate facilis ipsa reprehenderit labore ipsam eius sed perferendis.',
      episodes: [
        {
          id: 'SC-ep1',
          episode: 1
        },
        {
          id: 'SC-ep2',
          episode: 2
        },
        {
          id: 'SC-ep3',
          episode: 3
        },
      ]
    },
    {
      podcast: "Women's Right",
      id: 'WM-001',
      img: WomenRight,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos cupiditate facilis ipsa reprehenderit labore ipsam eius sed perferendis.',
      episodes: [
        {
          id: 'WR-ep1',
          episode: 1
        },
        {
          id: 'WR-ep2',
          episode: 2
        },
        {
          id: 'WR-ep3',
          episode: 3
        },
      ]
    },
    {
      podcast: 'Social Life',
      id: 'SL-001',
      img: SocialClass,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos cupiditate facilis ipsa reprehenderit labore ipsam eius sed perferendis.',
      episodes: [
        {
          id: 'SL-ep1',
          episode: 1
        },
        {
          id: 'SL-ep2',
          episode: 2
        },
        {
          id: 'SL-ep3',
          episode: 3
        },
      ]
    },
  ],
}

export const feedbacks = [
  {
    id: 'FBAC-1001',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempora impedit, repellat doloribus sequi numquam atque a error molestiae quaerat.',
    source: Spotify,
    name: 'John Doe',
    avatar: Avatar
  },
  {
    id: 'FBAC-1002',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempora impedit, repellat doloribus sequi numquam atque a error molestiae quaerat.',
    source: Spotify,
    name: 'John Doe',
    avatar: Avatar
  },
  {
    id: 'FBAC-1003',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempora impedit, repellat doloribus sequi numquam atque a error molestiae quaerat.',
    source: Spotify,
    name: 'John Doe',
    avatar: Avatar
  },
  {
    id: 'FBAC-1004',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempora impedit, repellat doloribus sequi numquam atque a error molestiae quaerat.',
    source: Spotify,
    name: 'John Doe',
    avatar: Avatar
  },
  {
    id: 'FBAC-1005',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempora impedit, repellat doloribus sequi numquam atque a error molestiae quaerat.',
    source: Spotify,
    name: 'John Doe',
    avatar: Avatar
  },
]

export const  episodes:PodcastEpisode[] = [
  {
    podcast: 'Perplexed Mind',
    podcastId: 'PM-001',
    image: TeslaCover,
    episode: '1',
    title: 'Are you a perplexed mind person?',
    id: 'PM-ep1',
    description: 'Lorem ipsum r adipisicing elit. Et quos cupiditate facilis ipsa reprehenderit.',
    tags: ['mind', 'behaviour', 'health'],
    'release-date': '2022-12-05',
    host: {
      name: 'John Doe',
      img: ''
    },
    featured: true,
  },
  {
    podcast: 'Perplexed Mind',
    podcastId: 'PM-001',
    image: TeslaCover,
    episode: '1',
    title: 'Are you a perplexed mind person?',
    id: 'PM-ep1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos cupiditate facilis',
    tags: ['mind', 'behaviour', 'health'],
    'release-date': '2022-12-05',
    host: {
      name: 'John Doe',
      img: ''
    },
    featured: true,
  },
  {
    podcast: 'Perplexed Mind',
    podcastId: 'PM-001',
    image: TeslaCover,
    episode: '1',
    title: 'Are you a perplexed mind person?',
    id: 'PM-ep1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos cupiditate facilis ips.',
    tags: ['mind', 'behaviour', 'health'],
    'release-date': '2022-12-05',
    host: {
      name: 'John Doe',
      img: ''
    },
    featured: true,
  },
  {
    podcast: 'Perplexed Mind',
    podcastId: 'PM-001',
    image: TeslaCover,
    episode: '1',
    title: 'Are you a perplexed mind person?',
    id: 'PM-ep1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos cupiditate facilis ips.',
    tags: ['mind', 'behaviour', 'health'],
    'release-date': '2022-12-05',
    host: {
      name: 'John Doe',
      img: ''
    },
    featured: true,
  },
  {
    podcast: 'Perplexed Mind',
    podcastId: 'PM-001',
    image: TeslaCover,
    episode: '1',
    title: 'Are you a perplexed mind person?',
    id: 'PM-ep1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos cupiditate facilis ips.',
    tags: ['mind', 'behaviour', 'health'],
    'release-date': '2022-12-05',
    host: {
      name: 'John Doe',
      img: ''
    },
    featured: true,
  },
  {
    podcast: 'Perplexed Mind',
    podcastId: 'PM-001',
    image: TeslaCover,
    episode: '1',
    title: 'Are you a perplexed mind person?',
    id: 'PM-ep1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos cupiditate facilis ips.',
    tags: ['mind', 'behaviour', 'health'],
    'release-date': '2022-12-05',
    host: {
      name: 'John Doe',
      img: ''
    },
    featured: true,
  },
]


export const plans = [
  {
    id: 'Member0001',
    name: 'Member',
    price: '$9.9',
    description: 'Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.',
    benefits: ['Exclusive content', '5% discount on Merch', 'Join the community', 'Livesttreaming Access']
  },
  {
    id: 'Member0002',
    name: 'Member',
    price: '$9.9',
    description: 'Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.',
    benefits: ['Exclusive content', '5% discount on Merch', 'Join the community', 'Livesttreaming Access']
  },
  {
    id: 'Member0003',
    name: 'Member',
    price: '$9.9',
    description: 'Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor.',
    benefits: ['Exclusive content', '5% discount on Merch', 'Join the community', 'Livesttreaming Access']
  },
]

export const hosts = [
  {
    id: 'HOST-001',
    hostNumber: 1,
    name: 'Porter Severus',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusantium magni pariatur obcaecati, tempore quos!',
    avatar: HostAvatar,
    icon: Smiley,

  },
  {
    id: 'HOST-002',
    hostNumber: 2,
    name: 'Porter Severus',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusantium magni pariatur obcaecati, tempore quos!',
    avatar: HostAvatar2,
    icon: Star
  }
]

export const benefits = [
  {
    id: 'MB-001',
    title: 'Topic By Request',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, laboriosam!',
    icon: Scribble1
  },
  {
    id: 'MB-002',
    title: 'Exclusive Content',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, laboriosam!',
    icon: ShiningStars
  },
  {
    id: 'MB-003',
    title: 'Join the Community',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, laboriosam!',
    icon: Smiley
  },
  {
    id: 'MB-004',
    title: 'Livestreaming Access',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, laboriosam!',
    icon: Face
  },
  {
    id: 'MB-005',
    title: 'Exclusive Episodes and Merch',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, laboriosam!',
    icon: Fire
  },
  {
    id: 'MB-006',
    title: 'And much more!',
    desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, laboriosam!',
    icon: Star
  },
]
