import { FlatList, RefreshControl, Text, View } from "react-native"
import { DUMMY_DATA } from "../../data/dummy";
import EventItem from "./event-item";
const EventList = () => {
    const renderItem = ({item}) => {
        return <EventItem id={item.id} title={item.title} body={item.body} />
    }
    return (
        <View>
            <Text>Event List</Text>
            <FlatList 
                data={DUMMY_DATA}
                keyExtractor={item=> item.id}
                renderItem={renderItem}
                refreshControl= {
                    <RefreshControl 
                        refreshing={false}
                        onRefresh={()=>console.log('refreshing...')}
                    />
                }
            />
        </View>
    );
}

export default EventList;