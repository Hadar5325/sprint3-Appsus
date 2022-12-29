

export function NotePreview({ info }) {

    //    console.log('notes at preview:',note)
    //    console.log('info at preview:',note.info)
    const { txt, title } = info

    return <article className='text-container flex'>
        <h3>{title}</h3>
        <p>{txt}</p>
    </article>

}