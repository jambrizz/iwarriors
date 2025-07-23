export const metadata = {
    title: 'Immigration Warriors',
    description: 'Oficial website for the Immigrant Warriors Colaboration',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}