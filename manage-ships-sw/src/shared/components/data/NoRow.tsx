export type NoRowProps = {
    content: string
}

const NoRow = ({content}: NoRowProps) => {
    return <i>Aucun {content}</i>
}

export default NoRow;