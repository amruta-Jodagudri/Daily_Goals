import React, { useState } from 'react';
import { FaDumbbell, FaFire, FaHeart, FaMoon, FaShoePrints, FaTint } from 'react-icons/fa';
import Graph from '../Components/Graph';

const Page1 = () => {
    const [goals, setGoals] = useState([
        { title: 'Workout for 20 mins', completed: false },
        { title: 'Read Book for 15 mins', completed: false },
        { title: '30 mins walk', completed: false },
        { title: 'Sleep at 11 sharp', completed: false },
        { title: 'Drink 3L water', completed: false }
    ]);
    const [progress, setProgress] = useState(0);

    const toggleGoal = (index, event) => {
        event.stopPropagation();

        const newGoals = [...goals];
        newGoals[index].completed = !newGoals[index].completed;
        setGoals(newGoals);
        updateProgress(newGoals);
    };

    const trackAllGoals = () => {
        const newGoals = goals.map(goal => ({ ...goal, completed: true }));
        setGoals(newGoals);
        updateProgress(newGoals);
    };

    const updateProgress = newGoals => {
        const completedGoals = newGoals.filter(goal => goal.completed).length;
        const totalGoals = newGoals.length;
        const newProgress = (completedGoals / totalGoals) * 100;
        setProgress(newProgress);
    };

    const goalsList = goals.map((goal, index) => (
        <div key={index} className={`bg-gray-800 h-16 rounded-xl mb-2 flex items-center justify-between ${goal.completed}`} onClick={() => toggleGoal(index)}>
            <div className="flex items-center">
                {goal.title === 'Workout for 20 mins' && <FaDumbbell style={{ color: 'purple', fontSize: '30px' }} className="ml-4 p-1 mr-2 text-xl bg-gray-600 rounded-md" />}
                {goal.title === 'Read Book for 15 mins' && <FaFire style={{ color: 'orange', fontSize: '30px' }} className="ml-4 p-1 mr-2 text-xl bg-gray-600 rounded-md" />}
                {goal.title === '30 mins walk' && <FaShoePrints style={{ color: 'green', fontSize: '30px' }} className="ml-4 p-1 mr-2 text-xl bg-gray-600 rounded-md" />}
                {goal.title === 'Sleep at 11 sharp' && <FaMoon style={{ color: 'skyblue', fontSize: '30px' }} className="ml-4 p-1 mr-2 text-xl bg-gray-600 rounded-md" />}
                {goal.title === 'Drink 3L water' && <FaTint style={{ color: 'blue', fontSize: '30px' }} className="ml-4 p-1 mr-2 text-xl bg-gray-600 rounded-md" />}
                <p className="p-4 text-xl">{goal.title}</p>
            </div>
            <input type="checkbox" checked={goal.completed} onChange={(event) => toggleGoal(index, event)} className="mr-4 h-7 w-7" />
        </div>
    ));

    return (
        <div className="bg-gray-600 p-4 w-96 text-white h-screen overflow-y-auto">
            <div className="p-3 bg-blue-600 rounded-2xl h-28 flex">
                <img src="https://logodix.com/logo/412751.png" alt="circle" className='w-14 h-14 mt-4'/>
                <div className='p-2 w-72'>
                <p className="text-base font-semibold">Your Daily Goal Almost Done</p>
                <span className="text-base">{`${goals.filter(goal => goal.completed).length} of ${goals.length} Completed`}</span>
                <div className="h-1 rounded-2xl bg-slate-400 w-64">
                    <div className="h-full mt-2 bg-white" style={{ width: `${progress}%` }}></div>
                    <p className="ml-56">{`${Math.round(progress)}%`}</p>
                </div>
                </div>
            </div>
            <div className="m-4 text-xl font-semibold flex items-center">
                <p>Today's Goal</p>
                <FaHeart className='ml-44' style={{ color: 'red' }} />
            </div>
            <div className="">{goalsList}</div>
            <div className="flex items-center mt-4">
                <div className="w-96 bg-orange-500 rounded-full pt-2 pb-2 flex items-center justify-between" onClick={trackAllGoals}>
                    <span className="rounded-full ml-1 h-10 w-10 bg-white flex items-center justify-center text-sm font-bold text-orange-700">Track</span>
                    <p className="text-xl flex-1 text-center">Swipe to track all</p>
                    <span className="text-4xl mr-2">&raquo;</span>
                </div>
            </div>
            <Graph goals={goals} />
        </div>
    );
};

export default Page1;


