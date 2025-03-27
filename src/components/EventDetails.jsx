import React from "react";
import { useParams } from "react-router-dom";
import eventBg from "../assets/EventBg.jpeg";
export default function EventDetails() {
  const eventlist = {
    1: {
      title: "DALGONA PAPERS",
      topic: "Topics to be presented",
      description: `➢Neural networks and fuzzy systems                    
➢Machine learning and deep learning
➢IOT
➢Cyber security
➢Social defined networks
➢Block chain technology
➢Networking
➢Data Science
➢Cloud computing
➢Current Trends(Relate to IT)`,
      registerLink: "https://forms.gle/Wx8pU2E27qkjazCw9",
      Rule: `●Team Size: 2 to 3 participants.
●Abstract: Maximum 250 words.
●Submission Format: PPT (.pptx).
●Submission Deadline: One day before the event.
●Presentation Time: 10 minutes, followed by a Q&A session.
●Presentation Slides: Minimum 10 slides and Maximum 12 slides.
●Formatting: Use clear and readable fonts.
●Dress Code: Formal attire.`,
contact:`
Contact:
1.Santha - 7418300492
2.Issac - 7418313877`
    },
    2: {
      title: "GLASS BRIDGE DESIGN",
      description: `UI/UX 
The UI/UX Design Event is a competition where participants will showcase their creativity and 
design skills by crafting a visually appealing and user-friendly interface. This event focuses on designing an interactive web page that aligns with a given theme or problem statement,
which will be provided on the spot.`,
      registerLink: "https://forms.gle/Wx8pU2E27qkjazCw9",
      Rule: `●Team Size: Duo participation only.
●Event Duration: 90 minutes.
●Rounds: 2 Rounds will be conducted.
●Theme/Problem Statement: Given on the spot.
●Design Scope: Web page UI/UX design.
●Allowed Tools: Figma and Adobe XD.
●Template Usage: Pre-made templates are not allowed;
designs must be created during the event.
●Plagiarism: Strictly prohibited; copied designs will lead to
disqualification.`,
contact:`
Contact:
HariHaran U - 8754621240
Nithish S - 7708723271`
    },
    3: {
      title: "THE MASKED BUG",
      description: `The Debugging Challenge is a competitive coding event 
      where participants must analyze and correct faulty code snippets within a given time frame.
      This event tests problem-solving skills, programming proficiency, and debugging efficiency.
      Contestants will be given code containing syntax errors, logical errors, or runtime errors,
      and their task is to identify and fix them while preserving the original program’s intended logic.`,
      registerLink: "https://forms.gle/Wx8pU2E27qkjazCw9",
      Rule: `●Participation: Solo only. Assistance & Plagiarism: Strictly prohibited.
●Rounds: Round 2 may be conducted if needed (e.g., ties or close competition).
●Time Limit: 45 minutes per round.
●Task: Debug a faulty code snippet to produce the correct output.
●Error Types: Syntax errors, logical errors, or runtime errors.
●Code Integrity: Fix errors without altering the intended logic of the program.Tab switching is not allowed.
●Maintain the given time limit.
●There should be no communication between participants.
●Do not reconstruct the entire code with new code; only make necessary corrections or adjustments.
●LANGUAGES: python, c, c++, Java
●The participant is allowed to choose their preffered language`,
contact:`
Contact:
Sivamani - 8531807705
Yuvarajan - 8428733620`
    },
    4: {
      title: "THE ELIMINATION ROOM",
      description: `Code Quest is a thrilling multi-level coding challenge designed to test participants’ problem-solving, logical reasoning, and programming skills.
      The event consists of four progressive levels, each presenting unique challenges such as riddles, code fillers, coding problems, and quizzes.
      Teams must successfully complete each level to advance to the next stage.`,
      registerLink: "https://forms.gle/Wx8pU2E27qkjazCw9",
      Rule: `●Team Size: Maximum 2 participants (Duo).
●Participation Limit: First come, first serve – only 20 teams allowed.
●Time Limit: 60 minutes.
●Players must complete each level to unlock the next.
●Each level includes coding, logic, or encryption puzzles.
●Levels :
●Level 1 : Riddles
●Level 2 : Code filler
●Level 3 : Coding
●Level 4 : Quiz
Hints are available, But they reduce the final score. 
Elimination criteria: Based on number of registration, eliminated in each level
Languages: python, c, Java.`,
contact:`
Contact:
Dharsan - 9345614584
Prasanna - 9344427793`
    },
    5: {
      title: "DIGITAL DEATH MATCH",
      description: `The Battle Royale Gaming Tournament is an intense esports competition featuring two popular mobile games: BGMI (Battlegrounds Mobile India) and Free Fire. Players will compete in squads to showcase their strategic gameplay, survival skills, and combat tactics in an ultimate showdown.
      ●Device Restrictions: Emulators are not allowed.
      ●Fair Play: Hacking or teaming up will result in disqualification.
      Monetary winnings will be forfeited if disqualified`,
      registerLink: "https://forms.gle/Wx8pU2E27qkjazCw9",
      Rule: `BGMI
●Squad Size: 4 players per squad.
●Equipment: Players must bring their own mobile device with an internet connection.
●Match Format: Single round on Erangel map.
●Winning Criteria: Based on final rank position.
FREE FIRE
●Game Mode: Battle Royale – Squad Mode.
●Squad Size: 4 players per squad.
●Tournament Structure: Open Qualifiers & Finals.
●Scoring: Teams earn points based on performance in each match.
●Map Requirement: Players must download necessary maps (Purgatory - Nextra - No Character Skill).
`,
contact:`
Contact:
Vignesh raj - 9791502223`
    },
    6: {
      title: "THE FRONT MAN'S STRATEGY",
      description: `Rounds in board room boss :
ROUND 1: BrandHive
Identify the brand based on its logo and advertisement and taglines.
ROUND 2: Tune Hunt
Identify the song by listening to its background music, lyrics and connections.
ROUND 3: Echoverse
A movie scene with audio will be played for participants.
Each participant has limited chances to watch the video.
After watching, they must dub the dialogue.
Participants can either recreate the original dialogue or create their own version.
ROUND 4: Pictogram Play
Participants will receive a random image on the spot.
Participants must analyze the positioning, size, color, and arrangement of elements in the puzzle to find the hidden phrase.
Duration: Maximum 15 sec (Per image)`,
      registerLink: "https://forms.gle/Wx8pU2E27qkjazCw9",
      Rule: `●Participation: Solo only.
●Entry Limit: Limited slots, First Come First Serve.
●Device Usage: Mobile devices(Except 1 Round) and other devices are strictly prohibited.
●Rounds: Four rounds with specific time limits.
●Judging Criteria: Judges will select the best players for the next round.
●Performance: Emotions and expressions are essential.`,
contact:`
Contact:
Ragul Raja - 7904897562`
    },
    7: {
      title: "456 BIDDING WAR",
      description: `The IPL Auction event is an exciting strategic game designed to simulate the real Indian Premier League (IPL) player auction.
      Participants will take on the role of team owners and bid for players to build the strongest possible cricket squad within a given budget.
      This event tests decision-making, budget management, strategy, and knowledge of cricket.`,
      note: "Note: first come first serve",
      registerLink: "https://forms.gle/Wx8pU2E27qkjazCw9",
      Rule: `●Team Selection: Maximum 10 teams (First Come First Serve).
●Team Size: Up to 4 participants per team.
●Registration: Only online registration is accepted.`,
contact:
`Contact:
Jeeva N - 6379818794
Sanjay S - 7397139329`
    },
  };

  const { id } = useParams();
  const event = eventlist[parseInt(id)];

  if (!event)
    return <div className="text-white text-center">Event Not Found</div>;

  return (
    <div className="relative w-full h-screen  tracking-widest overflow-y-auto snap-y snap-mandatory font-sans">
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${eventBg})` }}
      ></div>
      <div className="relative z-10 text-white w-full">
        <section className="h-screen flex flex-col items-center justify-center snap-start relative">
          <h1 className="text-4xl font-bold font-squid text-center">
            {event.title}
          </h1>
          <div
            className="absolute bottom-10 animate-bounce cursor-pointer"
            onClick={() =>
              document
                .getElementById("descriptionSection")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            <svg
              className="w-10 h-10 text-white "
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
            <svg
              className="w-10 h-10 text-white  "
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </section>

        <section className="h-screen flex items-center justify-center snap-start">
          {event.description && (
            <div className="w-11/12 max-w-lg bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-500 opacity-90">
              <h1 className="text-xl font-semibold mb-3">Description:</h1>
              <h3 className="text-center font-bold m-0 p-0">{event.topic}</h3>
              <h2 className="text-center font-bold">{event.note}</h2>
              <p className="whitespace-pre-line text-md ">
                {event.description}
              </p>
            </div>
          )}
        </section>
        <section className="h-screen flex flex-col items-center justify-center gap-6 snap-start">
          {event.Rule && (
            <div className="w-11/12 max-w-lg bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-500 opacity-90">
              <h1 className="text-xl font-semibold mb-3">RULES:</h1>
              <p className="whitespace-pre-line">{event.Rule}
                <span className="font-bold whitespace-pre-line mt-2">{event.contact}</span>
              </p>
            </div>
          )}
          <a
            href={event.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 mt-0 bg-gray-700 text-white font-bold rounded-md border-3 border-red-500 hover:bg-gray-600 transition"
          >
            Register Now
          </a>
        </section>
      </div>
    </div>
  );
}
