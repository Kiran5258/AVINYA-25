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
      Rule: `❖Maximum number of participants in a team is 3 and the minimum number is 2.
❖Abstract should not exceed more than 250 words and paper should not exceed 15 pages.
❖Soft copy of the submitted paper must be in .docx format.
❖Soft copy must be submitted day before the event.Use clear and readable fonts.
❖The team will get 5 minutes for presentation followed by questions and answer sessions.
❖Send your abstract to itkrcemysticzip2k23@gmail.com
❖The abstract mail should contain abstract references, your e-mail id and mobile number.
❖Range of the slides in the presentation file is 5-10 slides.
❖Participants should come with proper dress code`,
    },
    2: {
      title: "GLASS BRIDGE DESIGN",
      description: `UI/UX 
Duo participation is mandatory.
The event will last 40 minutes, with a possible second round if required.
Participants will design a webpage UI/UX based on a given theme or problem statement.
Only Figma and Adobe XD are allowed; pre-made templates are not permitted.
Plagiarism is strictly prohibited—original designs are required.`,
      registerLink: "https://forms.gle/Wx8pU2E27qkjazCw9",
      Rule: `●Duo participation only.
●The total duration of the event is 40 minutes.
●If needed, Round 2 will be conducted based on the competition's requirements
●Participants will be given a theme or problem statement on the spot.
●The design should be based on webpage UI/UX.
●Allowed design tools: Figma and Adobe XD.
●Pre-made templates are not allowed; designs must be created during the event.
Plagiarism is strictly prohibited; copied designs will result in disqualification.`,
    },
    3: {
      title: "THE MASKED BUG",
      description: `Participants must compete individually; team entries are not allowed.
External assistance and plagiarism are strictly prohibited.
Each round will have a 45-minute time limit.
Participants will debug faulty code containing syntax, logical, or runtime errors while maintaining the program’s intended logic.
A second round will be conducted only if needed in case of ties or close competition.`,
      registerLink: "https://forms.gle/Wx8pU2E27qkjazCw9",
      Rule: `●Solo participation only – team entries are not allowed.
●Any form of external assistance or plagiarism is strictly prohibited.
●A second round will be conducted only if needed (e.g., in case of ties or close competition).
●Each round will have a 30-minute time limit.
●Participants will receive a faulty code snippet and must debug it to produce the correct output.
●The errors in the code may include syntax errors, logical errors, or runtime errors.
Code must be corrected without altering the intended logic of the program.`,
    },
    4: {
      title: "THE ELIMINATION ROOM",
      description: `Compete in teams of two in this fast-paced coding and logic challenge! With only 40 teams allowed,
       you must clear four levels—Riddles, Code Filler, Coding, and Quiz—within 60 minutes to win.
      Each level unlocks the next, and hints are available but come at a cost.
      Eliminations occur at each stage based on participation.
      Think fast, solve smart, and race to the finish!`,
      registerLink: "https://forms.gle/Wx8pU2E27qkjazCw9",
      Rule: `Team Size: Maximum 2 participants (Duo).
Participation Limit: First come, first serve – only 40 teams allowed.
Time Limit: 60 minutes.
Players must complete each level to unlock the next.
Each level includes coding, logic, or encryption puzzles.
Levels :
Level 1 : Riddles
Level 2 : Code filler
Level 3 : Coding
Level 4 : Quiz
Hints are available, But they reduce the final score. 
Elimination criteria: Based on number of registration, eliminated in each level.`,
    },
    5: {
      title: "DIGITAL DEATH MATCH",
      description: `The event features two popular battle royale games: BGMI and Free Fire.
In BGMI, squads must have a  4 players, and emulators are strictly prohibited.
Free Fire matches will be played in Battle Royale Squad Mode, with open qualifiers and finals.
Players must bring their own mobile devices with an active internet connection.
Hacking or teaming up will result in immediate disqualification. Winners will be determined based on rank position in BGMI and match results in Free Fire.`,
      registerLink: "https://forms.gle/Wx8pU2E27qkjazCw9",
      Rule: `BGMI
●Must have a 4 players should be in a squad.
●Emulators are not allowed.
●The player should bring their mobile and have an internet connection.
●If you are caught hacking or teaming up your team will be disqualified.
●Only one round will be conducted (Erangel)
●Winners will be decided based on their rank position.

FREE FIRE
●All matches are in Battle Royal Squad Mode
●Emulator not allowed
●Open qualifiers and Finals.`,
    },
    6: {
      title: "THE FRONT MAN'S STRATEGY",
      description: ` Rounds in board room boss :
ROUND 1: BrandHive
Identify the brand based on its logo and advertisement.
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
Speech duration: Maximum 15 sec (Per image)`,
      registerLink: "https://forms.gle/Wx8pU2E27qkjazCw9",
      Rule: `Participation: Solo only.
Entry Limit: Limited slots, first come, first served.
Device Usage: Mobile phones and other devices are strictly prohibited.
Rounds: Four rounds with specific time limits.
Judging Criteria: Judges will select the best players for the next round.
Performance: Emotions and expressions are essential.`,
    },
    7: {
      title: "456 BIDDING WAR",
      description: `A maximum of 10 teams will be selected based on first-come, first-served registration.
Each team can have up to 4 participants.
Online registration is mandatory; no offline entries will be accepted.
Teams will engage in a thrilling auction-style competition, strategizing to build the best squad.
Only two prizes will be awarded: Winner & Runner-up.`,
      note: "Note: first come first serve",
      registerLink: "https://forms.gle/Wx8pU2E27qkjazCw9",
      Rule: `●Maximum 10 teams to be selected based on registration.
●First Come First Serve
●Maximum 4 participants per team.
●Online registration is only accepted.
Only two prizes Winner & Runner.`,
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
              <p className="whitespace-pre-line">{event.Rule}</p>
            </div>
          )}
          <a
            href={event.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2  bg-gray-700 text-white font-bold rounded-md border-3 border-red-500 hover:bg-gray-600 transition"
          >
            Register Now
          </a>
        </section>
      </div>
    </div>
  );
}
