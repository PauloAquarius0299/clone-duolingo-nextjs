type Props = {
    children: React.ReactNode;
}

export const FreedWrapper = ({children}: Props)  => {
    return (
        <div className="flex-1 relative top-10 pb-10">{children}</div>
    )
}

