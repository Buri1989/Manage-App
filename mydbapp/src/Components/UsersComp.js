import { useState, useEffect } from 'react'
import { ButtonComp } from './ButtonComp'
import { UserComp } from './UserComp'
export const UsersComp = (props) => {

    useEffect(() => {

        setFilteredList(props.usersData)  //doesn't work with  [], must ask dima/eyal

    }, [props.usersData]
    )

    const changeSearchHandler = (e) => {
        //console.log("search changed: " +e.target.value)
        let strSearch = e.target.value.toLowerCase()
        setFilteredList(props.usersData.filter(item => (item.name.toLowerCase().includes(strSearch) ||
            item.email.toLowerCase().includes(strSearch))))
    }


    const [selectedId, setSelectedId] = useState(-1)
    const [filteredList, setFilteredList] = useState(props.usersData)
    const selectIdCall = (id) => {
        setSelectedId(id)
        //console.log("called from child: " + id)
    }
    return (
        <div style={{ width: "600px", borderStyle: "solid", borderColor: "grey", margin: 0 | 20, borderRadius: "25px" }}>
            <span style={{ margin: 0 | 10 }}>Search </span>
            <input type="text" onChange={changeSearchHandler} style={{ margin: 15 | 20 }}></input>
            <ButtonComp name="Add" width="70px" onClick={props.navigateUser} />
            <br />
            {/*  {props.usersData.map(item=><UserComp key={item.id} data={item}/>)} */}
            {filteredList.map(item => <UserComp key={item.id} data={item} selectCall={selectIdCall} boolSelect={item.id === selectedId} />)}
        </div>
    )
}