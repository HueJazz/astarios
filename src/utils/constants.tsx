type MenuType = {
    name: string
    link: string
    more?: Array<string>
}

export const Menu:Array<MenuType> = [
    {
        name: "About Us",
        link: "about",
        more: ['Company', 'Management Team']
    },
    {
        name: "Services",
        link: "services",
        more: ['Managed Delivery', 'Dedicated Development Teams', 'Software Security Testing']
    },
    {
        name: "Expertise",
        link: "expertise",
        more: ['Application Security Services', 'DecOps and Cloud Engineering', 'Big Data Analytics', 'Mobile App Development', 'QA and Software Testing', 'IoT and M2M Solutions Delivery']
    },
    {
        name: "Technologies",
        link: "technologies",
    },
    {
        name: "References",
        link: "references",
    },
    {
        name: "Reviews",
        link: "reviews",
    },
    {
        name: "Blog",
        link: "blog",
    }
]

type SocialsType = {
    name: string
    img: string
}

export const Socials:Array<SocialsType> = [
    {
        name: "Facebook",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+ElEQVR4nO3ZMS5EURTH4bMBkehMo7EXG9HrUNqEjj3o6CQjOqUpSGTUCgUNIj55oZ9nZt57Z6777eCXf3FycyOqfwhb2Mc5HvHqxzOe8IBb3OASh5EJ1nGKD3/zGVlgG3fmFBlgDZN5IxqRAY4tKIaGEd5KCNlbNKKRIeTMEsTQcL+EjnGGkObIzfL+eyBHkRW+WoQcRHba2YzstBCrQA1JRl2kZ7jWvXEfIX14KSVkUkrIRSkhJ6WEHJUSsltKyE4fIVcdR0yx0XlIi9CZYhWoIcmoiySjLpKMukgy6iLJqIskoy6SjLpIMuoiyZj9ph/+o7OK7n0DaHnpTc9J16kAAAAASUVORK5CYII="
    },
    {
        name: "Linked In",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA1ElEQVR4nO3TsUpCURzH8UvQ1pBLk+TbNLi79Dg9R+DiItEDlCL0AIW4SZOL4KouYvWJREGv3VvBuVeM813///P7cv7nf5IkcihQQxdzdHBZlrhrl8eyxLOUeFqWuHOoG9e+ZOubP5T2xkcJqqjjGleo/OXwHj/Ub3GBe7ynaks0cV6E+A6v8nnCSWjxh9/RCC3eMEEPw4x6uwhxC6dbPTff9AyKGPXOX8cZ3lJ949DiUUZOeuEWocX9jJx+Xk4I8fN+yqrvJYqTPOKo//9yRSJJID4B81lAuTaXytkAAAAASUVORK5CYII="
    },
    {
        name: "Twitter",
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABeUlEQVR4nO3WvUtXURjA8auWCBKZ4OYsKs3RUlIIgkaL/kAMGtqCgv6CSFtcRIK2phSHaFAkl4IWHcVFN116GSWIhqS3T1w4w0U994XfdZHfd7yc5/lynnOe89wkadGiBOjCFOYwi8n02ynrOmMJhtFTRpaJuYUvTvIJI+jFPbzHpViSJWxGF5xcfx0/xfmFP/iHGbTFEu2FgG30lxDvKCaVrmIBj2OJ9jMBh5jOkQ6pxlt0xJKtnRKQln78eJlwt4L0FdrzSpeX7DNeoBF2O1FB3Cg6s4tYVj8jReJdvA7nWycDReJ36udH9OHIiMfOQLyeK83In9csflhKHOT38bUG6beyr2CS9lvouw84alL8rPRuU/Ckht2mFbuSVAFteNmE9C9uV5JmwWh6KyNjL4/ZpFkwiK0K0sXo+CsC3aGn3+B3SeFRdOzlgRvYwEEY4FX4iKu5gjxwGY/Cj0AR37GCm0mdoA93Qmulr9k8nuIBruFCrcIW547/OjHT9ha3CWoAAAAASUVORK5CYII="
    }
]
type DevelopmentType = {
    name: string,
    technologies: Array<StackType>;
}

type StackType = {
    name: string,
    img: string;
}

const backendStack: Array<StackType> = [
    {
        name:"c#",
        img:"//astarios.com/wp-content/uploads/2020/05/c-600x380-1.png"
    }, 
    {
        name:"c++",
        img:"//astarios.com/wp-content/uploads/2020/05/c-c-600x380-1.png"
    },
    {
        name:"java",
        img:"//astarios.com/wp-content/uploads/2020/05/java-600x380-1.png"
    },
    {
        name:"c",
        img:"//astarios.com/wp-content/uploads/2020/05/net-600x380-1.png"
    },
    {
        name:"node",
        img:"//astarios.com/wp-content/uploads/2020/05/node.png"
    },
    {
        name:"python",
        img:"//astarios.com/wp-content/uploads/2020/05/python-600x380-1.png"
    },
    {
        name:"php",
        img:"//astarios.com/wp-content/uploads/2020/05/php-600x380-1.png"
    },
    {
        name:"scala",
        img:"//astarios.com/wp-content/uploads/2020/05/scala-600x380-1.png"
    },
    {
        name:"symphony",
        img:"//astarios.com/wp-content/uploads/2020/05/symfony-600x380-1.png"
    }
]
    
const frontendStack: Array<StackType> = [{
        name:"angular",
        img:"//astarios.com/wp-content/uploads/2020/05/angular.png"
    },
    {
        name:"html, css, js",
        img:"//astarios.com/wp-content/uploads/2020/05/frontend-600x380-1.png"
    },
    {
        name:"js",
        img:"//astarios.com/wp-content/uploads/2020/05/javascript-600x380-1.png"
    }, 
    {
        name:"react",
        img:"//astarios.com/wp-content/uploads/2020/05/react-600x380-1.png"
    }, 
    {
        name:"vue",
        img:"//astarios.com/wp-content/uploads/2020/05/vue-logo.png"
    }]

const mobileStack: Array<StackType> = [{
        name:"android",
        img:"//astarios.com/wp-content/uploads/2020/05/android-600x380-1.png"
    },
    {
        name:"ios",
        img:"//astarios.com/wp-content/uploads/2020/05/ios-600x380-1.png"
    }, 
    {
        name:"react-native",
        img:"//astarios.com/wp-content/uploads/2020/05/react-native-600x380-1.png"
    }
]

const otherStack: Array<StackType> = [{
        name:"aws",
        img:"//astarios.com/wp-content/uploads/2020/05/aws.png"
    },
    {
        name:"google cloud",
        img:"//astarios.com/wp-content/uploads/2020/05/javascript-600x380-2.png"
    }, 
    {
        name:"mongodb",
        img:"//astarios.com/wp-content/uploads/2020/05/mongodb-logo.png"
    }, 
    {
        name:"mysql",
        img:"//astarios.com/wp-content/uploads/2020/05/mysql.png"
    }, 
    {
        name:"postgresql",
        img:"//astarios.com/wp-content/uploads/2020/05/postgresql.png"
    }, 
    {
        name:"qa",
        img:"//astarios.com/wp-content/uploads/2020/05/qatesting-600x380-1.png"
    }, 
    {
        name:"scrum",
        img:"//astarios.com/wp-content/uploads/2020/05/scrum-600x380-1.png"
    }, 
    {
        name:"ui-ux",
        img:"//astarios.com/wp-content/uploads/2020/05/ui-ux-600x380-1.png"
    }, 
    {
        name:"unity",
        img:"//astarios.com/wp-content/uploads/2020/05/unity3d-600x380-1.png"
    }
]


export const Development: Array<DevelopmentType> = [
    {
        name: "BACKEND",
        technologies: backendStack
    },
    {
        name: "FRONTEND",
        technologies: frontendStack
    },
    {
        name: "MOBILE",
        technologies: mobileStack
    },
    {
        name: "OTHER",
        technologies: otherStack
    }
]

type MaintenanceType = {
    title: string,
    img: string,
    text: string
}

export const Maintenance: Array<MaintenanceType> = [
    {
        title: "Dedicated Development Teams",
        img: "https://astarios.com/wp-content/uploads/2020/05/service1.svg",
        text: "Building an extended team with astarios is just like opening your own remote development center without the hassle."
    },
    {
        title: "Managed Delivery",
        img: "https://astarios.com/wp-content/uploads/2020/05/service2.svg",
        text: "Mid-size and enterprise-level software development to cater to your specific business goals.Connect with astarios to learn about the managed development team models and technology solutions."
    },
    {
        title: "Software Security Testing",
        img: "https://astarios.com/wp-content/uploads/2020/05/service3.svg",
        text: "At astarios, we focus on the software quality assurance and security testing. Get in touch with us to find out how to expand your QA team, conduct security audit, and more."
    }
]

type SpecializationType = {
    title: string,
    img: string,
}

export const Specialization: Array<SpecializationType> = [
    {
        title: "Mobile App Development from concept to production",
        img: "https://astarios.com/wp-content/uploads/2021/01/e11.png"
    },
    {
        title: "Big Data Analytics services to empower your business",
        img: "https://astarios.com/wp-content/uploads/2021/01/e22.png"
    },
    {
        title: "DevOps and Cloud Engineering Services",
        img: "https://astarios.com/wp-content/uploads/2021/01/e33.png"
    },
    {
        title: "Application Security Services (Secure DevOps)",
        img: "https://astarios.com/wp-content/uploads/2021/01/e44.png"
    },
    {
        title: "QA and Software Testing for Web, Mobile, API and Backend",
        img: "https://astarios.com/wp-content/uploads/2021/01/e55.png"
    },
    {
        title: "Custom IoT Software Development and M2M Solutions Delivery",
        img: "https://astarios.com/wp-content/uploads/2021/01/e66.png"
    }
]

type HighlightsType = {
    date: string,
    title: string,
    img: string,
    text: string
}

export const Highlights: Array<HighlightsType> = [
    {
        date: "February 9, 2021",
        title: "Leading IoT Companies in Switzerland",
        img: "https://astarios.com/wp-content/uploads/2021/02/cutch2021d.png",
        text: "Clutch Names astarios as a Leading IoT Company in Switzerland While at face value, the realm of IoT seems too"
    },
    {
        date: "December 4, 2020",
        title: "astariois interviewed by famous Ukrainian blogger Andrey Burenok",
        img: "https://astarios.com/wp-content/uploads/2020/12/111-e1607094386708.jpg",
        text: "“ – Is your company profitable or very profitable? – Nowadays despite the crisis the revenue reaches 5 billion"
    },
    {
        date: "March 1, 2020",
        title: "Zürich DevSecOps Meetup",
        img: "https://astarios.com/wp-content/uploads/2020/03/devsecops-1.png",
        text: "Thanks Jan for sharing this with us https://www.linkedin.com/pulse/z%25C3%25BCrich-devsecops-meetup-jan-jambor The second Zürich DevSecOps Meetup organized by Reto and Ken of astarios with support of “the DevOPS” company VSHN and hosted by Swisscom."
    }
]