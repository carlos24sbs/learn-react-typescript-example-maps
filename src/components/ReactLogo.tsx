import reactLogo from '../logo.svg';

export const ReactLogo = () => {
    return (
        <div>
            <img src={reactLogo} alt="React icon"
                style={{
                    bottom: '20px',
                    position: 'fixed',
                    right: '20px',
                    width: '130px',
                }} />
        </div>
    )
}
