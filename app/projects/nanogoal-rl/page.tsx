"use client"

import useSeasonBg from "@/hooks/useSeasonBg";





function NanoGoalRLPage() {

    const bg = useSeasonBg();

    return (
        <section className={`bg-orange-50 dark:bg-zinc-900 ${bg} text-black dark:text-white px-8 py-4 min-h-125 flex flex-col items-center`}>
            <h1 className="text-center text-3xl lg:text-4xl py-10">Nanogoal-RL</h1>
            <p className="text-center my-2">A goal-conditioned RL project</p>
            <p className="text-right w-full pr-4">Last updated: 02/02/2026</p>
            <p className="my-3 text-center">
                This page summarizes the main steps taken during the conception of <strong>NanoGoal-RL</strong>:
                a goal-conditioned reinforcement learning project built with a custom <strong>Gymnasium</strong> environment
                and trained with <strong>Stable-Baselines3</strong> (PPO).
                It is written as a living document: sections are structured so new milestones, experiments, and results can be added over time.
            </p>
            <p className="my-3 w-full">
                The technologies I used are : 
                <ul className="ml-24 p-4 list-disc text-left">
                    <li>Python</li>
                    <li>NumPy</li>
                    <li>Gymnasium</li>
                    <li>Stable-Baselines3</li>
                    <li>TensorBoard</li>
                    <li>Tensorflow</li>
                    <li>Matplotlib</li>
                    <li>Pandas</li>
                    <li>Pygame</li>
                </ul>
            </p>
            <p className="my-3">
                NanoGoal-RL is a custom simulation inspired by a blood vessel environment containing walls and moving entities
                such as red and white blood cells. A controllable agent must navigate toward a target position.
                The project focuses on building an environment that is realistic enough to capture meaningful navigation challenges
                and on training a goal-conditioned policy capable of generalizing across different situations.
            </p>

            <p className="my-3">
                The goal of the project is to train a reinforcement learning agent to reach a target in a complex environment.
                The experiment takes place in a simulated blood vessel whose topology is generated using Perlin noise.
                At the beginning of each episode, the target and the agent positions are randomly sampled from the available
                positions in the main connected component of the vessel. I also introduced white and red blood cells, which currently
                have limited influence on the agent but are intended to become dynamic obstacles in future iterations, allowing the
                agent to learn avoidance behaviors in addition to goal reaching.
                The blood flow applies a constant force to the agent and the cells, while the target remains immobile.
                An important aspect of the environment is that the random generation is seeded, which means that each episode is
                fully reproducible. This reproducibility makes it possible to consistently analyze and compare the agent’s
                performance across training sessions.
            </p>

            <p className="my-3">
                To implement this environment, I created a class called <b>NanoEnv</b> that inherits from the <b>Gymnasium</b>
                base environment class. In order to define a valid environment, I implemented the constructor
                <code>__init__</code> as well as the <code>reset</code> and <code>step</code> methods.
                <br />
                In <code>__init__</code>, I initialized the variables required for the simulation, such as the grid size,
                maximum velocity, and physical parameters. I then focused on defining the <b>observation space</b> and
                <b>action space</b> required for learning. The observation space initially consisted of the agent and target
                positions, the agent’s velocity, its orientation relative to the x-axis, and the positions of red and white
                blood cells on the grid. The action space allowed the agent to apply continuous changes to both its orientation
                and velocity.
                <br />
                In the <code>reset</code> method, I generated the vessel topology, randomly selected the positions of the target
                and the agent, and then placed the remaining cells. With this setup in place, the environment was ready for
                interaction through the <code>step</code> method. In <code>step</code>, I handled the environment dynamics
                following the action selected by the model and implemented the reward logic. Initially, the reward was defined
                as the negative distance to the target, with an additional positive reward when the goal was reached, a negative
                reward when the episode was truncated due to a timeout, and a penalty when the agent collided with the vessel walls.
            </p>

            <br />

            <p className="my-3">
                Once the environment was functional, I wanted a way to visualize the agent’s behavior and the progression of
                each episode. To achieve this, I implemented the <code>render</code> method using <b>Pygame</b>.
                This rendering logic displays the evolution of the environment’s state in real time.
                Mapping a discrete grid-based representation to a continuous visualization was challenging, but it ultimately
                resulted in a clear and informative depiction of the agent’s movements and interactions.
            </p>

            <p className="my-3">
                After completing the environment, I added the training pipeline using the PPO algorithm from
                <b>Stable-Baselines3</b>. I began with a short training run of 50&nbsp;000 timesteps and visually evaluated
                the agent’s behavior. At this stage, the agent was not learning meaningful navigation strategies: it frequently
                moved in circles or remained nearly stationary until the episode was truncated. To address this, I introduced
                a constant negative reward at each timestep to encourage movement.
                Although this modification caused the agent to move more, its actions were unstable and abrupt.
                I therefore added penalties for excessively large changes in velocity and orientation.
                This led to smoother behavior, but the agent still struggled to consistently move toward the target.
            </p>

            <p className="my-3">
                At this point, I redesigned the observation space. Instead of the previous formulation, the agent now received
                its position, the distance to the target, its velocity, and its orientation represented using the sine and cosine
                of the angle. Additionally, I introduced a simple lidar-like sensor providing distances to nearby walls in eight
                directions around the agent. The action space remained conceptually similar, but I restricted the magnitude of
                allowed changes in velocity and orientation to encourage more stable control.
                Finally, I normalized both the observation and action spaces to facilitate learning.
                <br />
                I also increased the training budget from 50&nbsp;000 to 800&nbsp;000 timesteps.
            </p>

            <p className="my-3">
                Following this training, I obtained what I refer to as version 0 of Billy. The agent’s performance was still
                very poor. Only a single episode resulted in the agent approaching the target successfully, and most trajectories
                contained many unnecessary movements. In many cases, Billy would approach the target but then deviate and lose
                progress. I identified two main causes for this behavior.
                <ul className="ml-24 p-4 list-disc text-left">
                    <li>
                        The environments and training conditions varied too significantly from one episode to another.
                        Since both the environment and training parameters were randomly generated, the agent was exposed to a wide
                        range of worlds, from very easy to extremely difficult, within the same training phase.
                    </li>
                    <li>
                        The learning process lacked a curriculum structure. The agent was trained simultaneously on easy,
                        medium, and hard environments, which prevented stable and progressive learning.
                    </li>
                </ul>
            </p>

            <p className="my-3">
                To address these issues, I revised the training methodology. The first step was to change how environments were
                selected during training. Because the environment was already fully reproducible through seeding, I manually
                selected sets of seeds corresponding to different difficulty levels.
                <ul className="ml-24 p-4 list-disc text-left">
                    <li>
                        20 easy seeds, where the agent typically only needed to move in a straight line to reach the target.
                    </li>
                    <li>
                        20 medium seeds, where the agent needed to navigate around at least one wall to reach the target.
                    </li>
                    <li>
                        20 hard seeds, where the agent often had to traverse long distances and perform multiple turns around walls.
                    </li>
                </ul>
                I then defined a difficulty-dependent training distribution.
                <ul className="ml-24 p-4 list-disc text-left">
                    <li>easy: 100% easy</li>
                    <li>medium: 20% easy and 80% medium</li>
                    <li>hard: 10% easy, 20% medium, and 70% hard</li>
                </ul>
                <br />
                The second step was to control how the seeds varied during training. I introduced seed pools whose size was
                initially restricted. Training started with only two seeds from the current difficulty level, and every
                2&nbsp;000 episodes (approximately 1&nbsp;200&nbsp;000 timesteps), the pool size was doubled.
                This strategy significantly stabilized learning by gradually increasing environmental diversity.
                <br />
                I also made a small change to the reward shaping. Instead of giving the negation of the distance between the
                target and the agent as a reward, I started working with the progress it made, meaning I now use the the difference 
                between the previous distance to the goal and the one after the action is taken. It gives the model enough flexibility 
                to learn how to turn and go around obstacles.
            </p>

            <br />

            <p className="my-3">
                After implementing these changes, I launched the training sessions. The easy-mode model was trained for
                &nbsp;<b>12&nbsp;000&nbsp;000 timesteps</b>, which took approximately <b>10 hours</b>, resulting in what I call the
                &nbsp;<b>Toddler version of Billy</b>. This model succeeded on nearly all easy environments.
                When evaluated on medium and hard environments, Billy generally moved toward the target but struggled to
                navigate around walls.
                <br />
                I then trained a medium-difficulty model for an additional <b>30&nbsp;000&nbsp;000 timesteps</b>&nbsp;
                (approximately <b>18 hours</b>), producing <b>Middle Schooler Billy</b>. This version performed well on both
                easy and medium environments and demonstrated the ability to navigate around walls. However, its performance
                on hard environments remained poor.
                <br />
                Finally, I trained Billy on hard environments for <b>78&nbsp;000&nbsp;000 timesteps</b>&nbsp;
                (approximately <b>1 day and 8 hours</b>). Unfortunately, this model underperformed compared to the previous ones,
                showing degraded results across all difficulty levels. I am currently investigating the cause of this behavior.
                One likely direction is increasing the model capacity by using a larger number of parameters and extending the
                training duration, as the training metrics suggested that the agent was beginning to improve toward the end of
                the session.
            </p>
        </section>
    );
}



export default NanoGoalRLPage;