function onItemDropped(srcId, dstId){
    console.log('onItemDropped src id=', srcId, 'dst id=', dstId)
}
function DragDrop(props){

    const {id}=props

    function startDrag(ev) {
        ev.dataTransfer.setData("id", id)
        console.log('drag id=', id)
    }

    function dragOver(ev) {

        ev.preventDefault()

    }
    function dragEnter(ev) {

        ev.dataTransfer.dropEffect = props.dropEffect

    }

    function drop(ev) {

        const srcId = ev.dataTransfer.getData("id")

        if (srcId) {

            props.onItemDropped(srcId, id)

        }

    }
    return <div id={id} draggable onDragStart={startDrag} onDragOver={dragOver} onDragEnter={dragEnter} onDrop={drop}>{props.children}</div>
}


function DragNDropPage() {

    return <div>
        <DragDrop id="1" onItemDropped={onItemDropped} dataItem="item-1">
            <div>Something to be dragged</div>
        </DragDrop>
        <DragDrop id="2" onItemDropped={onItemDropped}>Drop Target</DragDrop>
    </div>

}

export  {DragNDropPage, DragDrop, onItemDropped}