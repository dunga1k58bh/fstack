import { redirect } from 'next/navigation';

export default function HomePage() {
	redirect('/home'); // Redirect root to /home
	return null; // This is never rendered
}
