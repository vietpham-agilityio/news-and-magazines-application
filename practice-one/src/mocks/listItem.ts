import ImageStore from '@/constants/images';
import {
  AuthorDataResponse,
  CategoriesResponse,
  CommentsResponse,
  IBreadCrumbItem,
  IHashtag,
  IMenu,
  IPostItem,
  ISlideItem,
  ITagItem,
  PaginationPage,
  PostDataResponse,
  PostsResponse,
} from '@/types';

const listTypePosts: string[] = ['New', 'Trendy', 'Popular', 'Top'];

// Tags
const listTagItems: ITagItem[] = [
  { id: '1', tagName: 'Montenegro' },
  { id: '2', tagName: 'Visit Croatia' },
  { id: '3', tagName: 'Luxury Travel' },
  { id: '4', tagName: 'Travel Log' },
  { id: '5', tagName: 'Paradise Island' },
  { id: '6', tagName: 'Travel Info' },
];

// Categories
const listCategories: IMenu[] = [
  {
    id: 'World',
    name: 'World News',
    path: '/category/worldnews',
  },
  {
    id: 'National',
    name: 'National News',
    path: '/category/nationalnews',
  },
  {
    id: 'Local',
    name: 'Local News',
    path: '/category/localnews',
  },
  {
    id: 'Business',
    name: 'Business and Finance',
    path: '/category/business-and-finance',
  },
  {
    id: 'Technology',
    name: 'Technology',
    path: '/category/technology',
  },
  {
    id: 'Health',
    name: 'Health and Wellness',
    path: '/category/health-and-wellness',
  },
  {
    id: 'Science',
    name: 'Science and Environment',
    path: '/category/science-and-environment',
  },
  {
    id: 'Entertainment',
    name: 'Entertainment',
    path: '/category/entertainment',
  },
  {
    id: 'Sports',
    name: 'Sports',
    path: '/category/sports',
  },
  {
    id: 'Lifestyle',
    name: 'Lifestyle',
    path: '/category/lifestyle',
  },
];

// Navigates
const listNavItems: IMenu[] = [
  {
    id: '1',
    name: 'Pages',
    path: '/pages',
  },
  {
    id: '2',
    name: 'Contact Us',
    path: '/contact-us',
  },
  {
    id: '3',
    name: 'About Us',
    path: '/about-us',
  },
];

// Slider
const listSlider: ISlideItem[] = [
  {
    id: '1',
    image:
      'https://images.unsplash.com/photo-1716995164712-a5a4e72a8d67?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
    title: 'Exploring Urban Wonders: The Joy of a Street Walk',
    content:
      'Immerse yourself in the urban landscape by taking a street walk. Marvel at architectural wonders, enjoy spontaneous street performances, and soak in the vibrant energy that defines city life. Each step offers a new adventure.',
  },
  {
    id: '2',
    image:
      'https://images.unsplash.com/photo-1521714161819-15534968fc5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BpZGVybWFufGVufDB8fDB8fHww',
    title: 'Culinary Journeys: Street Food Adventures',
    content:
      'Embark on a culinary journey through the streets, where the aroma of diverse cuisines fills the air. Taste the flavors of the world, from food trucks to street vendors, and experience the city’s culinary heartbeat.',
  },
  {
    id: '3',
    image:
      'https://images.unsplash.com/photo-1674606033420-f9a43a1dde41?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8',

    title: 'Historical Strolls: Walking Through Time',
    content:
      'Take a walk back in time as you traverse historical streets. Learn about the rich heritage and significant events that shaped the city. Each building and monument has a tale to tell, connecting the past with the present.',
  },
  {
    id: '4',
    image:
      'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMzkxNDZ8fGVufDB8fHx8fA%3D%3D',
    title: 'Architectural Wonders: Discovering Urban Design on Foot',
    content:
      'Explore the city’s architectural wonders on foot. From modern skyscrapers to historic facades, the streets are lined with impressive structures that showcase the evolution of design and engineering over the years.',
  },
  {
    id: '5',
    image:
      'https://images.unsplash.com/photo-1716857892273-3649e30f09b1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Serendipitous Encounters: The Magic of Street Walking',
    content:
      'Embrace the serendipity of street walking, where unexpected encounters and spontaneous discoveries make each journey unique. Whether it’s a street musician or a hidden alley, the magic lies in the surprises along the way.',
  },
];

// List hashtag
const listHashtagsItem: IHashtag[] = [
  {
    id: '1',
    name: 'Hashtag Food',
    imageUrl: ImageStore.HashtagFood,
  },
  {
    id: '2',
    name: 'Hashtag Animal',
    imageUrl: ImageStore.HashtagAnimal,
  },
  {
    id: '3',
    name: 'Hashtag Car',
    imageUrl: ImageStore.HashtagCar,
  },
  {
    id: '4',
    name: 'Hashtag Sport',
    imageUrl: ImageStore.HashtagSport,
  },
  {
    id: '5',
    name: 'Hashtag Music',
    imageUrl: ImageStore.HashtagMusic,
  },
  {
    id: '6',
    name: 'Hashtag Food',
    imageUrl: ImageStore.HashtagFood,
  },
  {
    id: '7',
    name: 'Hashtag Abstract',
    imageUrl: ImageStore.HashtagAbstract,
  },
  {
    id: '8',
    name: 'Hashtag Animal',
    imageUrl: ImageStore.HashtagAnimal,
  },
];

const listPostItems: IPostItem[] = [
  {
    id: '1',
    title: 'How to Spend the Perfect Day on Croatia’s Most Magical Island',
    content: 'Subhead',
    imageUrl: ImageStore.CarImage,
    alt: 'Top post',
  },
  {
    id: '2',
    title: 'How to Spend the Perfect Day on Croatia’s Most Magical Island',
    content: 'Subhead',
    imageUrl: ImageStore.FrogImage,
    alt: 'Top post',
  },
  {
    id: '3',
    title: 'How to Spend the Perfect Day on Croatia’s Most Magical Island',
    content: 'Subhead',
    imageUrl: ImageStore.PersonOne,
    alt: 'Top post',
  },
  {
    id: '4',
    title: 'How to Spend the Perfect Day on Croatia’s Most Magical Island',
    content: 'Subhead',
    imageUrl: ImageStore.FoodImage,
    alt: 'Top post',
  },
  {
    id: '5',
    title: 'How to Spend the Perfect Day on Croatia’s Most Magical Island',
    content: 'Subhead',
    imageUrl: ImageStore.PersonTwo,
    alt: 'Top post',
  },
];

const listBreadCrumb: IBreadCrumbItem[] = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Articles',
    path: '',
  },
];

const mockCategoryData: CategoriesResponse = {
  data: [
    {
      id: 1,
      attributes: {
        name: 'Category',
        description: 'Category description',
      },
    },
  ],
};

const mockPostDetailData: PostDataResponse = {
  data: {
    id: 1,
    attributes: {
      authorId: '2',
      title: 'Go Home After Long Time',
      content:
        "Download torrents from verified or trusted uploaders. If you're a BitTorrent user looking for safety tips, use this method. Both of the big-name BitTorrent indexers (The Pirate Bay and KickAssTorrents) use symbols to highlight torrents uploaded by verified users.",
      imageUrl:
        'https://images.unsplash.com/photo-1716223996696-ad6252a7fe7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D',
      updatedAt: '2024-6-1',
      likes: 3499,
      shared: 221,
      views: 9930,
      publicationDate: '2024-5-30',
      createdAt: new Date().toString(),
      publishedAt: new Date().toString(),
    },
  },
};

const mockPostsByAttributeData: PostsResponse = {
  data: [
    {
      id: 12,
      attributes: {
        title: 'Balancing Innovation and Responsibility',
        content:
          'Artificial Intelligence (AI) technologies have the potential to revolutionize industries, streamline processes, and improve lives. However, the rapid advancement and deployment of AI also raise significant ethical considerations regarding fairness, accountability, transparency, and privacy. This article examines the ethical implications of AI, the challenges they present, and strategies for promoting responsible AI development and deployment',
        imageUrl:
          'https://images.unsplash.com/photo-1608904063217-4e24362cda27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJhbGFuY2luZyUyMElubm92YXRpb24lMjBhbmQlMjBSZXNwb25zaWJpbGl0eXxlbnwwfHwwfHx8MA%3D%3D',
        authorId: '3',
        publicationDate: '2024-06-10',
        views: 32424,
        likes: 14433,
        shared: 4323,
        createdAt: '2024-06-09T22:02:46.341Z',
        updatedAt: '2024-06-09T22:03:28.281Z',
        publishedAt: '2024-06-09T22:04:52.520Z',
      },
    },
  ],
};

const mockAuthorData: AuthorDataResponse = {
  data: {
    id: 2,
    attributes: {
      name: 'Benzamine',
      email: 'benzo@gmail.com',
      avatarUrl: 'https://www.unsplash.com/image?v',
      updatedAt: '2024-5-30',
      createdAt: new Date().toString(),
      publishedAt: new Date().toString(),
    },
  },
};

const listPaginationPage: PaginationPage[] = [
  {
    id: 1,
    pageNumber: 1,
  },
  {
    id: 2,
    pageNumber: 2,
  },
  {
    id: 3,
    pageNumber: 3,
  },
];

const mockCommentData: CommentsResponse = {
  data: [
    {
      id: 1,
      attributes: {
        name: 'Emily Johnson',
        email: 'emily.johnson@gmail.com',
        content: 'This is my first comment on this website',
        avatarUrl:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
        website: 'http://www.sample.com',
        postId: 2,
        createdAt: '2024-06-17T21:38:19.068Z',
      },
    },
    {
      id: 2,
      attributes: {
        name: 'Emily Johnson',
        email: 'emily.johnson@gmail.com',
        content: 'This is my second comment on this website',
        avatarUrl:
          'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww',
        website: 'http://www.sample.com',
        postId: 2,
        createdAt: '2024-03-17T21:48:19.068Z',
      },
    },
  ],
};

export {
  listSlider,
  listTagItems,
  listNavItems,
  listPostItems,
  listTypePosts,
  listCategories,
  listBreadCrumb,
  listHashtagsItem,
  mockAuthorData,
  mockCategoryData,
  mockPostDetailData,
  listPaginationPage,
  mockCommentData,
  mockPostsByAttributeData,
};
