function DragNDropPage() {
    function DragDrop(props){
        function startDrag(ev) {
            ev.dataTransfer.setData("drag-item", props.dataItem)
        }

        function dragOver(ev) {

            ev.preventDefault()

        }
        function dragEnter(ev) {

            ev.dataTransfer.dropEffect = props.dropEffect

        }

        function drop(ev) {

            const droppedItem = ev.dataTransfer.getData("drag-item")

            if (droppedItem) {

                props.onItemDropped(droppedItem)

            }

        }
        return <div draggable onDragStart={startDrag} onDragOver={dragOver} onDragEnter={dragEnter} onDrop={drop}>{props.children}</div>
    }

    function onItemDropped(droppedItem){
        console.log('start')
    }

    return <div>
        <DragDrop onItemDropped={onItemDropped} dataItem="item-1">
            <div>Something to be dragged</div>
        </DragDrop>
        <DragDrop onItemDropped={onItemDropped}>Drop Target</DragDrop>
    </div>


}

export default DragNDropPage