export default function BlogHealthcareManagement() {
  return (
    <main className="container mx-auto py-20 px-4 max-w-3xl">
      <span className="inline-block px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold mb-2">
        Healthcare Tech
      </span>
      <h1 className="text-4xl font-bold mb-6">The Future of Healthcare Management Systems</h1>
      <div className="text-zinc-500 text-sm mb-6">April 12, 2025</div>
      <img
        src="/placeholder.svg?height=600&width=800"
        alt="The Future of Healthcare Management Systems"
        className="w-full rounded-lg mb-8"
      />
      <section id="aarogyam-project">
        <h2 className="text-2xl font-bold mb-4">Aarogyam: HealthTech Meets Friendship at IIT Indore</h2>

        <p className="mb-4">
          After surviving my first hackathon chaos, I thought I’d seen it all. But then came <strong>Aarogyam</strong>—an event hosted at IIT Indore that turned out to be way more than just code and caffeine. It was a 3-day blend of serious tech grind, pure fun, new friendships, and one unforgettable concert night.
        </p>

        <p className="mb-4">
          We had a few days to build our project before the event, so we jumped into planning mode. This time, our idea was centered around health management—a platform that helps people track symptoms, get recommendations, and store their medical data securely. Sounds simple? Well, the devil was in the <em>database</em>.
        </p>

        <p className="mb-4">
          Until this project, databases were kind of a mystery to me. I knew they existed (like some magical storage vault), but I’d never really worked with them hands-on. Aarogyam forced me to dive into the world of MongoDB, schemas, collections, and queries. Setting up proper models, linking the frontend with dynamic user data, and ensuring everything actually <em>stored</em> correctly—it was all new, a little overwhelming, but super satisfying when things finally clicked.
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-8">The IIT Indore Experience</h3>
        <p className="mb-4">
          Staying on campus for three days felt like stepping into another world. The infrastructure was top-notch, the vibe was electric, and the people? Inspiring. We met folks who had worked on startups, won multiple hackathons, and still found time to share tips and tricks with newcomers like us. The energy was contagious.
        </p>

        <p className="mb-4">
          At night, the whole place came alive. There was a cultural event with a full-blown concert—lights, music, cheers, everything. For a moment, it didn’t feel like a tech event at all. We danced, vibed, and laughed with complete strangers who quickly turned into friends. That night taught me something unexpected: networking doesn’t always happen in front of a screen. Sometimes it starts with a shared plate of Maggi or a joke in the dorm hallway.
        </p>

        <h3 className="text-xl font-semibold mb-2 mt-8">What Aarogyam Taught Me</h3>
        <ol className="list-decimal list-inside mb-4 space-y-2">
          <li><strong>Learning Isn’t Linear:</strong> One moment you’re stuck on a database query, the next you’re teaching someone else how to model a collection. You grow faster when you're teaching and learning at the same time.</li>
          <li><strong>Talk to People:</strong> Other participants shared their journeys, projects, and failures. Hearing those stories opened up new ideas and gave us better clarity on how to approach future events.</li>
          <li><strong>Small Wins Matter:</strong> Getting a user’s medical data to save and retrieve properly felt like a huge deal. Don’t wait for a big win—celebrate the small breakthroughs too.</li>
          <li><strong>Hackathons Are More Than Just Coding:</strong> It’s about being in an environment where everyone’s pushing their limits, helping each other, and having fun while at it. The conversations and connections we made were just as valuable as the code.</li>
        </ol>

        <h3 className="text-xl font-semibold mb-2 mt-8">The Final Take</h3>
        <p className="mb-4">
          Aarogyam was more than a project—it was a memory. It pushed us to explore backend development in ways we hadn’t before, especially with databases. But beyond the tech, it gave us moments that we’ll carry long after the code is forgotten—from sharing ideas with new friends to screaming lyrics at a campus concert.
        </p>

        <p className="mb-4">
          Looking back, I didn’t just learn how to structure a database—I learned how to be part of a community. And that’s something no tutorial can teach you.
        </p>
      </section>
    </main>
  )
}