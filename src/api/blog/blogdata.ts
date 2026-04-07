import type { BlogPostType, BlogType } from 'src/types/blog';
 
export const BlogComment: Array<BlogType> = [
    {
        id: "e40d4b",
        profile: {
            id: 1,
            avatar: "/images/profile/user-2.jpg",
            name: "John Sherman",
        },
        time: new Date("2045-1-25"),
        comment: "Non officia aute aliqua aute. Eu non eu officia id id sit id irure non labore cupidatat. Anim tempor incididunt esse minim voluptate mollit irure.",
        replies: [],
    },
    {
        id: "985cc4",
        profile: {
            id: 2,
            avatar: "/images/profile/user-3.jpg",
            name: "Daniel Edwards",
        },
        time: new Date("2083-1-19"),
        comment: "Duis eiusmod dolor voluptate nisi incididunt enim. Duis consequat ad officia aliqua eu est ullamco qui. Sint est eu non ex esse mollit nisi laborum aute.",
        replies: [
            {
                id: "883a71",
                profile: {
                    id: 3,
                    avatar: "/images/profile/user-3.jpg",
                    name: "Zachary Brewer",
                },
                time: "2084-1-3",
                comment: "Anim irure duis mollit excepteur labore est mollit elit occaecat incididunt qui laboris ipsum mollit. In nisi commodo sunt voluptate pariatur mollit aute. Quis occaecat adipisicing Lorem ut id occaecat aliqua ipsum eu pariatur quis. Velit commodo voluptate eiusmod eiusmod mollit voluptate quis. Amet laboris veniam consequat sunt do esse minim reprehenderit magna nostrud mollit sit.",
            },
        ],
    },
    {
        id: "b257fd",
        profile: {
            id: 4,
            avatar: "/images/profile/user-4.jpg",
            name: "Lucille Davidson",
        },
        time: new Date("2063-1-7"),
        comment: "Ad est minim ipsum voluptate. Incididunt aute nostrud Lorem magna laborum aliquip proident do dolor eiusmod. Et pariatur ea laboris esse adipisicing sunt consequat adipisicing anim dolor deserunt.",
        replies: [],
    },
];

export const BlogPost: Array<BlogPostType> = [
    {
        id: 5,
        title: 'Garmins Instinct Crossover is a rugged hybrid smartwatch',
        coverImg: "/images/blog/blog-img1.jpg",
        share: 5383,
        category: 'Gadget',
        featured: false,
        author: {
            id: 6,
            avatar: "/images/profile/user-1.jpg",
            name: "Nathaniel Obrien",
        },
        comments: ["Eiusmod laborum quis ut officia sunt cillum incididunt. Qui veniam in dolore labore laborum. Aliqua culpa ullamco duis eiusmod pariatur ipsum sit esse proident sint adipisicing occaecat aliquip exercitation. Ipsum anim et quis voluptate ad. Veniam officia voluptate sint qui quis commodo labore. Consequat ea adipisicing velit proident fugiat reprehenderit eiusmod. Ex eiusmod dolore eu ea mollit sint ullamco ullamco nulla nostrud ea consectetur sint irure."]
    },
    {
        id: 7,
        title: 'After Twitter Staff Cuts, Survivors Face ‘Radio Silence',
        coverImg: "/images/blog/blog-img2.jpg",
        share: 2088,
        category: 'Lifestyle',
        featured: false,
        author: {
            id: 8,
            avatar: "/images/profile/user-2.jpg",
            name: "Olive Stevens",
        },
        comments: ["Laboris magna culpa adipisicing labore tempor nisi ea sint. Cillum dolore elit voluptate mollit voluptate enim minim irure eu deserunt. Cupidatat elit ex ex qui veniam mollit voluptate elit ad et magna excepteur minim. Ex pariatur excepteur ut amet sunt enim deserunt laboris tempor enim. Duis ex qui nostrud ad cillum deserunt in ipsum tempor est officia ad amet nisi. Aliqua consequat nulla velit proident. Ad deserunt aliqua cupidatat deserunt proident qui consequat tempor nisi ea elit."]
    }, {

        id: 9,
        title: 'Apple is apparently working on a new ‘streamlined’ accessibility for iOS',
        coverImg: "/images/blog/blog-img3.jpg",
        share: 5237,
        category: 'Design',
        featured: false,
        author: {
            id: 1,
            avatar: "/images/profile/user-3.jpg",
            name: "Celia Osborne",
        },
        comments: ["Non consectetur officia ullamco tempor consectetur ipsum occaecat ex enim minim excepteur veniam. Commodo magna culpa tempor veniam exercitation Lorem irure voluptate exercitation duis. Lorem labore dolor ullamco eu non voluptate laboris nulla."]
    },
    {
        id: 1,
        title: 'Why Figma is selling to Adobe for $20 billion streamlined',
        coverImg: "/images/blog/blog-img4.jpg",
        share: 1010,
        category: 'Design',
        featured: false,
        author: {
            id: 1,
            avatar: "/images/profile/user-4.jpg",
            name: "Steven Burton",
        },
        comments: ["Ipsum consectetur mollit tempor ut dolore cupidatat eu id adipisicing Lorem dolore proident. Ullamco in magna esse labore reprehenderit. Esse ipsum labore nostrud duis voluptate."]
    }, {
        id: 1,
        title: 'Streaming video way before it was cool, go dark tomorrow',
        coverImg: "/images/blog/blog-img5.jpg",
        share: 3750,
        category: 'Lifestyle',
        featured: false,
        author: {
            id: 1,
            avatar: "/images/profile/user-5.jpg",
            name: "Minnie Perez",
        },
        comments: ["In dolor magna minim cupidatat amet proident officia eiusmod eu fugiat elit irure. Ipsum laborum veniam occaecat exercitation consequat exercitation id elit in dolore culpa do irure. Nisi nulla sunt cupidatat enim aliquip. Voluptate ullamco duis aliqua mollit non deserunt. Pariatur incididunt labore id magna occaecat ullamco laboris tempor tempor duis voluptate adipisicing labore mollit."]
    }, {
        id: 1,
        title: 'As yen tumbles, gadget-loving Japan goes for secondhand iPhones ',
        coverImg: "/images/blog/blog-img6.jpg",
        share: 3243,
        category: 'Gadget',
        featured: false,
        author: {
            id: 1,
            avatar: "/images/profile/user-1.jpg",
            name: "Dylan Reed",
        },
        comments: ["Ad do esse voluptate sunt pariatur aliquip sit quis non ea. Sint nulla in in est dolor. Tempor do incididunt do sunt voluptate ullamco sunt eiusmod. Culpa eiusmod elit tempor proident aliqua culpa non irure officia consequat. Ipsum velit id incididunt officia aliquip veniam pariatur consectetur. Non enim pariatur deserunt dolor tempor consectetur in tempor duis consequat occaecat consequat."]
    }, {
        id: 1,
        title: 'Intel loses bid to revive antitrust case against patent foe Fortress',
        coverImg: "/images/blog/blog-img11.jpg",
        share: 5063,
        category: 'Social',
        featured: false,
        author: {
            id: 1,
            avatar: "/images/profile/user-2.jpg",
            name: "Annie Jensen",
        },
        comments: ["Deserunt ipsum occaecat ea dolore eiusmod commodo elit aliquip officia exercitation. Nulla et ea excepteur ullamco do enim do incididunt laborum adipisicing veniam ea reprehenderit. Incididunt eu culpa pariatur dolore aliquip et fugiat sint mollit officia nulla veniam."]
    }, {
        id: 1,
        title: 'COVID outbreak deepens as more lockdowns loom in China',
        coverImg: "/images/blog/blog-img8.jpg",
        share: 3253,
        category: 'Health',
        featured: false,
        author: {
            id: 2,
            avatar: "/images/profile/user-3.jpg",
            name: "Leroy Quinn",
        },
        comments: ["Laborum aute velit anim exercitation. In est proident sit dolor aliqua eiusmod eiusmod cupidatat anim consectetur dolore non adipisicing. Sunt occaecat id sunt officia voluptate labore ex ea eu quis amet elit. Qui aliquip eu irure quis fugiat laboris quis culpa duis fugiat consectetur veniam ut tempor. Duis pariatur aliqua exercitation nostrud. Consectetur adipisicing in cupidatat deserunt do labore ut minim pariatur ipsum et non dolore."]
    }, {
        id: 2,
        title: 'Early Black Friday Amazon deals: cheap TVs, headphones, laptops',
        coverImg: "/images/blog/blog-img9.jpg",
        share: 4919,
        category: 'Gadget',
        featured: true,
        author: {
            id: 2,
            avatar: "/images/profile/user-4.jpg",
            name: "Edith Gibson",
        },
        comments: ["Consectetur et pariatur deserunt ut ex nisi enim aliqua. Irure exercitation sunt sint laboris occaecat consequat laboris incididunt exercitation reprehenderit do reprehenderit labore. Nulla qui veniam irure ut ex id ut. Non amet ex in ullamco elit eu. Sint excepteur exercitation adipisicing et reprehenderit dolore laborum. Nostrud enim dolore exercitation incididunt duis. Veniam Lorem exercitation tempor ea irure culpa dolor fugiat ex ea."]
    }, {
        id: 2,
        title: 'Presented by Max Rushden with Barry Glendenning, Philippe Auclair',
        coverImg: "/images/blog/blog-img10.jpg",
        share: 2420,
        category: 'Health',
        featured: true,
        author: {
            id: 2,
            avatar: "/images/profile/user-5.jpg",
            name: "Mina Ramos",
        },
        comments: ["Aliquip quis non tempor proident officia pariatur amet culpa sunt sit pariatur culpa. Proident minim id amet anim occaecat irure sit id consequat enim proident. Proident officia voluptate nostrud ullamco sunt ex quis pariatur dolore ea ullamco. Aliquip consectetur minim eu ipsum quis ad non do. Est laborum magna do officia commodo laborum quis est voluptate Lorem eu adipisicing nostrud incididunt."]
    }]