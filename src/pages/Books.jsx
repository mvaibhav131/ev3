import React, { useState } from 'react'
// const [data,getdata]=useState({})



const getdata=async(e)=>{
    e.preventDefault();
let res=await fetch ("http://localhost:8080/books",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify()
});
data=await (res.json())
}

let data=[
    {
        "id": 1,
        "title": "Unlocking Android",
        "isbn": "1933988673",
        "pageCount": 416,
        "publishedDate": {
          "$date": "2009-04-01T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
        "shortDescription": "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
        "longDescription": "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation & multimedia      * Sample Applications  ",
        "status": "PUBLISH",
        "authors": [
          "W. Frank Ableson",
          "Charlie Collins",
          "Robi Sen"
        ],
        "categories": [
          "Open Source",
          "Mobile"
        ]
      },
      {
        "id": 2,
        "title": "Flex on Java",
        "isbn": "1933988797",
        "pageCount": 265,
        "publishedDate": {
          "$date": "2010-10-15T00:00:00.000-0700"
        },
        "thumbnailUrl": "data:image/jpeg;base64,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",
        "shortDescription": "   A beautifully written book that is a must have for every Java Developer.       Ashish Kulkarni, Technical Director, E-Business Software Solutions Ltd.",
        "longDescription": "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
        "status": "PUBLISH",
        "authors": [
          "Bernerd Allmon",
          "Jeremy Anderson"
        ],
        "categories": [
          "Internet"
        ],
        "data": {
          "longDescription": "fghjkl,mnbvcvbnm,.lkjhgfcghk.nvbnmjl",
          "thumbnailUrl": "https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg"
        }
      },
      {
        "id": 3,
        "title": "Griffon in Action",
        "isbn": "1935182234",
        "pageCount": 375,
        "publishedDate": {
          "$date": "2012-06-04T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/almiray.jpg",
        "shortDescription": "Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.",
        "longDescription": "Although several options exist for interface development in Java, even popular UI toolkits like Swing have been notoriously complex and difficult to use. Griffon, an agile framework that uses Groovy to simplify Swing, makes UI development dramatically faster and easier. In many respects, Griffon is for desktop development what Grails is for web development. While it's based on Swing, its declarative style and approachable level of abstraction is instantly familiar to developers familiar with other technologies such as Flex or JavaFX.    Griffon in Action is a comprehensive tutorial written for Java developers who want a more productive approach to UI development. In this book, you'll immediately dive into Griffon. After a Griffon orientation and a quick Groovy tutorial, you'll start building examples that explore Griffon's high productivity approach to Swing development. One of the troublesome parts of Swing development is the amount of Java code that is required to get a simple application off the ground.    You'll learn how SwingBuilder (and its cousin builders) present a very palatable alternative in the form of a DSL geared towards building graphical user interfaces. Pair it up with the convention over configuration paradigm, a well tested and tried application source structure (based on Grails) and you have a recipe for quick and effective Swing application development. Griffon in Action covers declarative view development, like the one provided by JavaFX Script, as well as the structure, architecture and life cycle of Java application development",
        "status": "PUBLISH",
        "authors": [
          "Andres Almiray",
          "Danno Ferrin",
          "",
          "James Shingler"
        ],
        "categories": [
          "Java"
        ]
      },
      {
        "id": 4,
        "title": "OSGi in Depth",
        "isbn": "193518217X",
        "pageCount": 325,
        "publishedDate": {
          "$date": "2011-12-12T00:00:00.000-0800"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alves.jpg",
        "shortDescription": "Enterprise OSGi shows a Java developer how to develop to the OSGi Service Platform Enterprise specification, an emerging Java-based technology for developing modular enterprise applications. Enterprise OSGi addresses several shortcomings of existing enterprise platforms, such as allowing the creation of better maintainable and extensible applications, and provide a simpler, easier-to-use, light-weight solution to enterprise software development.",
        "longDescription": "A good application framework greatly simplifies a developer's task by providing reusable code modules that solve common, tedious, or complex tasks. Writing a great framework requires an extraordinary set of skills-ranging from deep knowledge of a programming language and target platform to a crystal-clear view of the problem space where the applications to be developed using the framework will be used.    OSGi Application Frameworks shows a Java developer how to build frameworks based on the OSGi service platform. OSGi, an emerging Java-based technology for developing modular applications, is a great tool for framework building. A framework itself, OSGi allows the developer to create a more intuitive, modular framework by isolating many of the key challenges the framework developer faces.    This book begins by describing the process, principles, and tools you must master to build a custom application framework. It introduces the fundamental concepts of OSGi, and then shows you how to put OSGi to work building various types of frameworks that solve specific development problems.    OSGi is particularly useful for building frameworks that can be easily extended by developers to create domain-specific applications. This book teaches the developer to break down a problem domain into its abstractions and then use OSGi to create a modular framework solution. Along the way, the developer learns software engineering practices intrinsic to framework building that result in systems with better software qualities, such as flexibility, extensibility, and maintainability.    Author Alexandre Alves guides you through major concepts, such as the definition of programming models and modularization techniques, and complements them with samples that have real applicability using industry-proved technologies, such as Spring-DM and Equinox.",
        "status": "PUBLISH",
        "authors": [
          "Alexandre de Castro Alves"
        ],
        "categories": [
          "Java"
        ]
      },
      {
        "id": 5,
        "title": "Flexible Rails",
        "isbn": "1933988509",
        "pageCount": 592,
        "publishedDate": {
          "$date": "2008-01-01T00:00:00.000-0800"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong.jpg",
        "shortDescription": "\"Flexible Rails created a standard to which I hold other technical books. You definitely get your money's worth.\"",
        "longDescription": "Rails is a fantastic tool for web application development, but its Ajax-driven interfaces stop short of the richness you gain with a tool like Adobe Flex. Simply put, Flex is the most productive way to build the UI of rich Internet applications, and Rails is the most productive way to rapidly build a database-backed CRUD application. Together, they're an amazing combination.    Flexible Rails is a book about how to use Ruby on Rails and Adobe Flex to build next-generation rich Internet applications (RIAs). The book takes you to the leading edge of RIA development, presenting examples in Flex 3 and Rails 2.    This book is not an exhaustive Ruby on Rails tutorial, nor a Flex reference manual. (Adobe ships over 3000 pages of PDF reference documentation with Flex.) Instead, it's an extensive tutorial, developed iteratively, how to build an RIA using Flex and Rails together. You learn both the specific techniques you need to use Flex and Rails together as well as the development practices that make the combination especially powerful.    The example application built in the book is MIT-licensed, so readers can use it as the basis for their own applications. In fact, one reader has already built an agile project management tool based on the book example!    With this book, you learn Flex by osmosis. You can read the book and follow along even if you have never used Flex before. Consider it \"Flex Immersion.\" You absorb the key concepts of Flex as you go through the process of building the application.    You will also learn how Flex and Rails integrate with HTTPService and XML, and see how RESTful Rails controller design gracefully supports using the same controller actions for Flex and HTML clients. The author will show you how Cairngorm can be used to architect larger Flex applications, including tips to use Cairngorm in a less verbose way with HTTPService to talk to Rails.    Flexible Rails is for both Rails developers who are interested in Flex, and Flex developers who are interested in Rails. For a Rails developer, Flex allows for more dynamic and engaging user interfaces than are possible with Ajax. For a Flex developer, Rails provides a way to rapidly build the ORM and services layer of the application.",
        "status": "PUBLISH",
        "authors": [
          "Peter Armstrong"
        ],
        "categories": [
          "Web Development"
        ]
      },
      {
        "id": 6,
        "title": "Hello! Flex 4",
        "isbn": "1933988762",
        "pageCount": 258,
        "publishedDate": {
          "$date": "2009-11-01T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong3.jpg",
        "shortDescription": "Hello! Flex 4 progresses through 26 self-contained examples selected so you can progressively master Flex. They vary from small one-page apps, to a 3D rotating haiku, to a Connect Four-like game. And in the last chapter you'll learn to build a full Flex application called SocialStalkr   a mashup that lets you follow your friends by showing their tweets on a Yahoo map.",
        "longDescription": "With Flex 4 you can easily add color and life to your web applications by introducing dynamic user features, slick transitions, and eye-catching animations. Flex also provides powerful data handling capabilities so you can build industrial-strength applications. And it's open source, so you can get started without forking over a lot of your hard-earned cash.    We think it should be just as much fun to learn Flex as it is to use Flex. Hello! Flex 4 shows you everything you need to know to get started with Flex 4 without bogging you down in obscure detail or academic edge cases. In this entertaining, hands-on book, you'll quickly move from Hello World into the techniques you'll need to use Flex effectively.    You'll start by progressing through 26 self-contained workshop items, which include everything from small one-page examples, to a 3D rotating haiku, to building a Connect Four game. Finally, in the last chapter you'll build a full Flex application called 'SocialStalkr': an interesting mashup of Twitter and Yahoo Maps that lets you 'stalk' your friends by showing specially formatted Twitter tweets on a Yahoo map.",
        "status": "PUBLISH",
        "authors": [
          "Peter Armstrong"
        ],
        "categories": [
          "Internet"
        ]
      },
      {
        "id": 7,
        "title": "Coffeehouse",
        "isbn": "1884777384",
        "pageCount": 316,
        "publishedDate": {
          "$date": "1997-07-01T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/asher.jpg",
        "shortDescription": "Coffeehouse is an anthology of stories, poems and essays originally published on the World Wide Web.",
        "longDescription": "Coffeehouse is an anthology of stories, poems and essays originally published on the World Wide Web. The purpose is to capture the zeitgeist of the web's creative community, and to give readers a chance to enjoy some of the best and most notable original works that have appeared in this form. It showcases over forty individual web writers, among them Joseph Squier, Martha Conway, Jason Snell, David Alexander, Carl Steadman and Walter Miller. The intent is to show the variety and vitality of the web's blossoming literary \"scene,\" and to capture the unique and highly iconoclastic \"personality\" of the web community.",
        "status": "PUBLISH",
        "authors": [
          "Levi Asher",
          "Christian Crumlish"
        ],
        "categories": [
          "Miscellaneous"
        ]
      },
      {
        "id": 8,
        "title": "Team Foundation Server 2008 in Action",
        "isbn": "1933988592",
        "pageCount": 344,
        "publishedDate": {
          "$date": "2008-12-01T00:00:00.000-0800"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/azher.jpg",
        "longDescription": "In complex software projects, managing the development process can be as critical to success as writing the code itself. A project may involve dozens of developers, managers, architects, testers, and customers, hundreds of builds, and thousands of opportunities to get off-track. To keep tabs on the people, tasks, and components of a medium- to large-scale project, most teams use a development system that allows for easy monitoring, follow-up, and accountability.    Microsoft Team Foundation Server 2008 (TFS), the server component of Microsoft's Visual Studio Team System (VSTS), provides a powerful collaborative platform for software-development teams. The product offers an integrated toolset for tracking work items, creating test cases, managing source code, generating builds, constructing database schemas, and so on. Because in software development one size does not fit all, TFS provides process customization, project management, and reporting capabilities to build solutions around your requirements.    Team Foundation Server 2008 in Action is a hands-on guide to Team Foundation Server 2008. Written for developers with a good handle on TFS basics, this book shows you how to solve real-life problems. It's not a repetition of Microsoft's product documentation. Team Foundation Server 2008 in Action is a practitioner's handbook for how to work with TFS under common constraints. This book walks you through real-life software engineering problems based on hundreds of hours of TFS experience.    You'll benefit from expert author Jamil Azher's extensive interactions with members of Microsoft's TFS team and MVPs, survey feedback from the author's blog, and interviews with organizations and user groups using TFS. Instead of just offering a high-level overview, the book provides detailed solutions for solving common   and not-so-common   problems using TFS. It discusses the strengths as well as weaknesses of TFS, and suggests appropriate problem resolution steps, workarounds, or custom solutions.",
        "status": "PUBLISH",
        "authors": [
          "Jamil Azher"
        ],
        "categories": [
          "Microsoft .NET"
        ]
      },
      {
        "id": 9,
        "title": "Brownfield Application Development in .NET",
        "isbn": "1933988711",
        "pageCount": 550,
        "publishedDate": {
          "$date": "2010-04-16T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/baley.jpg",
        "shortDescription": "Brownfield Application Development in .Net shows you how to approach legacy applications with the state-of-the-art concepts, patterns, and tools you've learned to apply to new projects. Using an existing application as an example, this book guides you in applying the techniques and best practices you need to make it more maintainable and receptive to change.",
        "longDescription": "It's easy to get excited about building a new software project from scratch. So-called \"greenfield\" projects often involve learning new technology and the opportunity for experimentation. Working on established software projects may seem less glamorous.    Most software developers have inherited a monolithic application where the day-to-day tasks involve maintenance, incremental improvements, or even cleaning up the mess another programmer left behind. These legacy or brownfield projects often have tightly coupled components, low cohesion, and poor separation of concerns, making them fragile and resistant to change.    Brownfield Application Development in .Net shows you how to approach legacy applications with the state-of-the-art concepts, patterns, and tools you've learned to apply to new projects. Using an existing application as an example, this book guides you in applying the techniques and best practices you need to make it more maintainable and receptive to change.    Starting with the build process and the introduction of unit tests, the authors show you how to set up the application so that in later chapters, you can make incremental changes aimed at decoupling components from each other. Each practice introduced will increase your confidence and ability to make subsequent changes to your code.    As the book proceeds, the authors introduce frameworks and tools commonly used today while still approaching the subject from a conceptual level so that you can substitute alternate tools as appropriate. This book examines the reasons why a tool is necessary, not the tool itself. Because the book is based on the authors' experiences, Brownfield Application Development in .Net moves beyond the theories and shows you the techniques you need to be successful.",
        "status": "PUBLISH",
        "authors": [
          "Kyle Baley",
          "Donald Belcham"
        ],
        "categories": [
          "Microsoft"
        ]
      },
      {
        "id": 10,
        "title": "MongoDB in Action",
        "isbn": "1935182870",
        "pageCount": 0,
        "publishedDate": {
          "$date": "2011-12-12T00:00:00.000-0800"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker.jpg",
        "shortDescription": "MongoDB In Action is a comprehensive guide to MongoDB for application developers. The book begins by explaining what makes MongoDB unique and describing its ideal use cases. A series of tutorials designed for MongoDB mastery then leads into detailed examples for leveraging MongoDB in e-commerce, social networking, analytics, and other common applications.",
        "longDescription": "MongoDB is a document-oriented database that's highly scalable and delivers very high-performance, especially with massive data sets that need to be spread across multiple servers. It blends the things you expect with any database   like indexing, querying, and high availability   with powerful new features like easy horizontal scaling (\"auto-sharding\"), map/reduce aggregation, and a flexible document data model to support dynamic schemas.    MongoDB In Action is a comprehensive guide to MongoDB for application developers. The book begins by explaining what makes MongoDB unique and describing its ideal use cases. A series of tutorials designed for MongoDB mastery then leads into detailed examples for leveraging MongoDB in e-commerce, social networking, analytics, and other common applications.    Along the way, all of MongoDB's major features are covered, including:        * Indexes and explain plans for efficient queries      * Atomic operations for managing simple data structures and manipulating complex, rich documents      * GridFS for storing and managing large binary objects (images, videos, etc.) in MongoDB      * Map-reduce for custom aggregations and reporting      * Master-slave replication and replica sets for automated failover      * Auto-sharding for automated horizontal scaling    The handy reference section on schema design patterns will help ease the transition from the relational data model of SQL to MongoDB's document-based data model. The numerous, detailed examples are implemented in Ruby and include comprehensive explanations.    MongoDB has been gaining traction in the developer community for its speed, flexibility, scalability, and ease of use. With production deployments that include SourceForge, Foursquare, and Shutterfly, MongoDB is proving to be a robust and reliable database system that keeps developers happy. Covering everything from installation to application design to deployment, MongoDB In Action is written for the application developer who wants to take advantage of MongoDB and get up and running quickly.",
        "status": "PUBLISH",
        "authors": [
          "Kyle Banker"
        ],
        "categories": [
          "Next Generation Databases"
        ]
      },
      {
        "id": 11,
        "title": "Android in Action, Second Edition",
        "isbn": "1935182722",
        "pageCount": 592,
        "publishedDate": {
          "$date": "2011-01-14T00:00:00.000-0800"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
        "shortDescription": "Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
        "longDescription": "When it comes to mobile apps, Android can do almost anything   and with this book, so can you! Android runs on mobile devices ranging from smart phones to tablets to countless special-purpose gadgets. It's the broadest mobile platform available.    Android in Action, Second Edition is a comprehensive tutorial for Android developers. Taking you far beyond \"Hello Android,\" this fast-paced book puts you in the driver's seat as you learn important architectural concepts and implementation strategies. You'll master the SDK, build WebKit apps using HTML 5, and even learn to extend or replace Android's built-in features by building useful and intriguing examples. ",
        "status": "PUBLISH",
        "authors": [
          "W. Frank Ableson",
          "Robi Sen"
        ],
        "categories": [
          "Java"
        ]
      },
      {
        "id": 12,
        "title": "Specification by Example",
        "isbn": "1617290084",
        "pageCount": 0,
        "publishedDate": {
          "$date": "2011-06-03T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
        "status": "PUBLISH",
        "authors": [
          "Gojko Adzic"
        ],
        "categories": [
          "Software Engineering"
        ]
      },
      {
        "id": 13,
        "title": "Flex 3 in Action",
        "isbn": "1933988746",
        "pageCount": 576,
        "publishedDate": {
          "$date": "2009-02-02T00:00:00.000-0800"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg",
        "longDescription": "New web applications require engaging user-friendly interfaces   and the cooler, the better. With Flex 3, web developers at any skill level can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it. And now that the major components of Flex are free and open-source, the cost barrier is gone, as well!    Flex 3 in Action is an easy-to-follow, hands-on Flex tutorial. Chock-full of examples, this book goes beyond feature coverage and helps you put Flex to work in real day-to-day tasks. You'll quickly master the Flex API and learn to apply the techniques that make your Flex applications stand out from the crowd.    Interesting themes, styles, and skins  It's in there.  Working with databases  You got it.  Interactive forms and validation  You bet.  Charting techniques to help you visualize data  Bam!  The expert authors of Flex 3 in Action have one goal   to help you get down to business with Flex 3. Fast.    Many Flex books are overwhelming to new users   focusing on the complexities of the language and the super-specialized subjects in the Flex eco-system; Flex 3 in Action filters out the noise and dives into the core topics you need every day. Using numerous easy-to-understand examples, Flex 3 in Action gives you a strong foundation that you can build on as the complexity of your projects increases.",
        "status": "PUBLISH",
        "authors": [
          "Tariq Ahmed with Jon Hirschi",
          "Faisal Abid"
        ],
        "categories": [
          "Internet"
        ]
      },
      {
        "id": 14,
        "title": "Flex 4 in Action",
        "isbn": "1935182420",
        "pageCount": 600,
        "publishedDate": {
          "$date": "2010-11-15T00:00:00.000-0800"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
        "longDescription": "Using Flex, you can create high-quality, effective, and interactive Rich Internet Applications (RIAs) quickly and easily. Flex removes the complexity barrier from RIA development by offering sophisticated tools and a straightforward programming language so you can focus on what you want to do instead of how to do it. And the new features added in Flex 4 give you an even wider range of options!    Flex 4 in Action is an easy-to-follow, hands-on Flex tutorial that goes beyond feature coverage and helps you put Flex to work in real day-to-day tasks. You'll quickly master the Flex API and learn to apply the techniques that make your Flex applications stand out from the crowd.    The expert authors of Flex 4 in Action have one goal-to help you get down to business with Flex. Fast. Flex 4 in Action filters out the noise and dives into the core topics you need every day. Using numerous easy-to-understand examples, Flex 4 in Action gives you a strong foundation that you can build on as the complexity of your projects increases.    Interesting themes, styles, and skins  It's in there.  Working with databases  You got it.  Interactive forms and validation  You bet.  Charting techniques to help you visualize data  Bam!  And you'll get full coverage of these great Flex 4 upgrades:  Next generation Spark components-New buttons, form inputs, navigation controls and other visual components replace the Flex 3 \"Halo\" versions. Spark components are easier to customize, which makes skinning and theme design much faster  A new \"network monitor\" allows you to see the data communications between a Flex application and a backend server, which helps when trying to debug applications that are communicating to another system/service  Numerous productivity boosting features that speed up the process of creating applications  A faster compiler to take your human-written source code and convert it into a machine-readable format  Built-in support for unit testing allows you to improve the quality of your software, and reduce the time spent in testing",
        "status": "PUBLISH",
        "authors": [
          "Tariq Ahmed",
          "Dan Orlando",
          "John C. Bland II",
          "Joel Hooks"
        ],
        "categories": [
          "Internet"
        ]
      },
      {
        "id": 15,
        "title": "Collective Intelligence in Action",
        "isbn": "1933988312",
        "pageCount": 425,
        "publishedDate": {
          "$date": "2008-10-01T00:00:00.000-0700"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alag.jpg",
        "longDescription": "There's a great deal of wisdom in a crowd, but how do you listen to a thousand people talking at once  Identifying the wants, needs, and knowledge of internet users can be like listening to a mob.    In the Web 2.0 era, leveraging the collective power of user contributions, interactions, and feedback is the key to market dominance. A new category of powerful programming techniques lets you discover the patterns, inter-relationships, and individual profiles   the collective intelligence   locked in the data people leave behind as they surf websites, post blogs, and interact with other users.    Collective Intelligence in Action is a hands-on guidebook for implementing collective-intelligence concepts using Java. It is the first Java-based book to emphasize the underlying algorithms and technical implementation of vital data gathering and mining techniques like analyzing trends, discovering relationships, and making predictions. It provides a pragmatic approach to personalization by combining content-based analysis with collaborative approaches.    This book is for Java developers implementing collective intelligence in real, high-use applications. Following a running example in which you harvest and use information from blogs, you learn to develop software that you can embed in your own applications. The code examples are immediately reusable and give the Java developer a working collective intelligence toolkit.    Along the way, you work with, a number of APIs and open-source toolkits including text analysis and search using Lucene, web-crawling using Nutch, and applying machine learning algorithms using WEKA and the Java Data Mining (JDM) standard.",
        "status": "PUBLISH",
        "authors": [
          "Satnam Alag"
        ],
        "categories": [
          "Internet"
        ]
      },
      {
        "id": 16,
        "title": "Zend Framework in Action",
        "isbn": "1933988320",
        "pageCount": 432,
        "publishedDate": {
          "$date": "2008-12-01T00:00:00.000-0800"
        },
        "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg",
        "shortDescription": "Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application.",
        "longDescription": "From rather humble beginnings as the Personal Home Page scripting language, PHP has found its way into almost every server, corporation, and dev shop in the world. On an average day, somewhere between 500,000 and 2 million coders do something in PHP. Even when you use a well-understood language like PHP, building a modern web application requires tools that decrease development time and cost while improving code quality. Frameworks such as Ruby-on-Rails and Django have been getting a lot of attention as a result.     For PHP coders, the Zend Framework offers that same promise without the need to move away from PHP. This powerful collection of components can be used in part or as a whole to speed up the development process. Zend Framework has the backing of Zend Technologies; the driving force behind the PHP programming language in which it is written. The first production release of the Zend Framework became available in July of 2007.    Zend Framework in Action is a comprehensive tutorial that shows how to use the Zend Framework to create web-based applications and web services. This book takes you on an over-the-shoulder tour of the components of the Zend Framework as you build a high quality, real-world web application. This book is organized around the techniques you'll use every day as a web developer \"data handling, forms, authentication, and so forth. As you follow the running example, you'll learn to build interactive Ajax-driven features into your application without sacrificing nuts-and-bolts considerations like security and performance.  This book is aimed at the competent PHP developer who wants to master framework-driven web development. Zend Framework in Action goes beyond the docs but still provides quick access to the most common topics encountered in the development of web applications.  ",
        "status": "PUBLISH",
        "authors": [
          "Rob Allen",
          "Nick Lo",
          "Steven Brown"
        ],
        "categories": [
          "Web Development"
        ]
      }
    
]

const Books = () => {







  return (
    <div>
      You Need to Login first Before Purchasing the Book:
      <div style={{display:"grid",gridTemplateColumns:"repeat 4 200px",gridTemplateRows:" repeat 4 200px"}}>
          <div>
              {data.map((item)=>(
                  <div key={item.id}>
                      <img style={{width:"300px",height:"400px"}} src={item.thumbnailUrl} alt="" />
                      <h1 style={{color:"blue"}}>{item.title}</h1>
                      <h4>{`Book Id :${item.isbn}`}</h4>
                      <h4>{`Book pages :${item.pageCount}`}</h4>
                      <h4 style={{color:"black"}}>{`Description :${item.longDescription}`}</h4>
                      <h4 style={{color:"red"}}>{`Description :${item.shortDescription}`}</h4>
                      <h3 style={{color:"lightgreen"}}>{`Book Autohr :${item.authors}`}</h3>
                      <h3 style={{color:"orange"}}>{`Date :${item.publishedDate.$date}`}</h3>
                      <h2>{`Catogories: ${item.categories}`}</h2>
                  </div>
              ))}
          </div>

      </div>
    </div>
  )
}

export default Books
