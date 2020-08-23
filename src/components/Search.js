import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';

function Search() {
	const [ input, setInput ] = useState('');

	const search = (e) => {
        e.preventDefault();
        console.log('Input', input)
	};

	return (
		<form className="search">
			<div className="search__input">
				<SearchIcon type='submit' onClick={search} className="search__inputIcon" />
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Search Google or type a URL"
					type="text"
				/>
				<MicIcon />
			</div>
			<div className="search__buttons">
				<Button type='submit' onClick={search} variant="outlined">
					Google Search
				</Button>
				<Button variant="outlined">I'm Feeling Lucky</Button>
			</div>
		</form>
	);
}

export default Search;
