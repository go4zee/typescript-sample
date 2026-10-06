interface Rectangle{
    height: number,
    width: number
}

interface ColoredRectangle extends Rectangle{
    color: string
}

const coloredRect: ColoredRectangle = {
    height: 10, 
    width: 12,
    color: "red"
};