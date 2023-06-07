import TagStickerStyles from '../../styles/components/Buttons/TagStickerStyles';
import Tag from '../../library/class/Tag';
import TextIconButton from './TextIconButton';
import { View } from 'react-native';

interface Props {
    tag: Tag;
    navigation: any;
}

export default function TagSticker({tag, navigation} : Props) {

    const onClickTagSticker = () => {
        navigation.navigate('TagScreen', { tag });
    };

    return (
        <View>
            <TextIconButton callBack={onClickTagSticker} showIcon={false} buttonStyle={TagStickerStyles.container} textStyle={[{backgroundColor: tag.colorTag}, TagStickerStyles.textTag]} text={tag.textTag} numberOfLineText={1}/>
        </View>
    )
}