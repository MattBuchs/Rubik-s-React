export default function Footer() {
    const now = new Date();
    const year = now.getFullYear();

    return (
        <footer className="flex justify-center items-center h-12 bg-slate-800 text-white mt-4">
            <p>Rubik&apos;s, le site du développeur React - {year} ©</p>
        </footer>
    );
}
