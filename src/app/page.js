"use client";
import { Button, Container, Text } from "@/app/chakra";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { useState } from "react";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";

export default function Home() {
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(false);
	console.log(userData);
	return (
		<Container maxW='container.lg'>
			<Navbar />
			<Text fontSize={"2xl"} textAlign={"center"} my={4}>
				Search users on Github by entering username
			</Text>
			<Search setUserData={(res) => setUserData(res)} setLoading={setLoading} />

			{userData && <UserProfile userData={userData} />}

			<Footer />
		</Container>
	);
}
