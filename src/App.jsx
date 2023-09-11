import './App.css';
import Todo from './Todo';
import Singer from './Singer';
import Counter from './Counter';
import Users from './Users';

function App() {
	const singers = [
		{"name":"Adele","age":33},
		{"name":"Beyoncé","age":40},
		{"name":"Ed Sheeran","age":30},
		{"name":"Taylor Swift","age":31},
		{"name":"Justin Bieber","age":27},
		{"name":"Rihanna","age":33},
		{"name":"Ariana Grande","age":28}
	];

	const handlerClick = () => {
		alert('You clicked on a button.')
	}

	return (
		<>
			<h2>Users</h2>
			<Users></Users>

			<h2>Singer List</h2>
			{
				singers.map(singer => <Singer singer={singer}></Singer>)
			}

			<button onClick={handlerClick}>Show Alert!</button>

			<Counter></Counter>

			<Products name="Laptop" price="108"></Products>
			<Products name="Mobile" price="27"></Products>
			<ol>
				<Todo task="Wake up in the morning"></Todo>
			</ol>
			<Person></Person>
		</>
	)
}

function Products({name, price}) {
	return(
		<div>
			<p>Product: {name}, Price: {price}k</p>
		</div>
	)
}

function Person() {
	const year = 2023;
	return (
		<div>
			<h2>This is {year} and making my very first React APP</h2>
		</div>
	)
}

export default App
