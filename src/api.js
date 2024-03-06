let base=() => "http://www.theeasylearnacademy.com/shop";
export default function getBase()
{
    return base() + "/ws/";
}
export function getImgBase()
{
    return base() + "/images/";
}