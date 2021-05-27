import { useCallback, useEffect, useState } from 'react';

const INIT = { textDay: 0, textHour: 0, textMinute: 0, textSecond: 0 };

const CountDown = ({ finishDate = 'May 24, 2021 12:32:00' }) => {
	const [ counter, setCounter ] = useState(INIT);
	const [ loading, setLoading ] = useState(true);

	let count = useCallback(
		() => {
			const countDate = new Date(finishDate).getTime();
			const now = new Date().getTime();
			const gap = countDate - now;

			const second = 1000;
			const minute = second * 60;
			const hour = minute * 60;
			const day = hour * 24; // 24*60*60*1000

			const textDay = Math.floor(gap / day);
			const textHour = Math.floor((gap % day) / hour);
			const textMinute = Math.floor((gap % hour) / minute);
			const textSecond = Math.floor((gap % minute) / second);
			gap <= 0 ? setCounter(INIT) : setCounter({ textDay, textHour, textMinute, textSecond });
		},
		[ finishDate ]
	);

	let countTimer = useCallback(
		() => {
			setInterval(() => {
				count();
				setLoading(false);
			}, 1000);
			return count;
		},
		[ count ]
	);

	useEffect(
		() => {
			setCounter(INIT);
			countTimer();
			return clearInterval(countTimer());
		},
		[ countTimer ]
	);

	let finalResult = loading ? (
		<p>loading...</p>
	) : counter !== INIT ? (
		<div>{` ${counter.textDay} : ${counter.textHour} : ${counter.textMinute} : ${counter.textSecond} `} </div>
	) : (
		<p>done!</p>
	);

	return finalResult;
};

export default CountDown;
