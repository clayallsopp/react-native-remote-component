(function main(React, ReactNative, require) {

  var StyleSheet = ReactNative.StyleSheet;
  var View = ReactNative.View;
  var Text = ReactNative.Text;
  var LayoutAnimation = ReactNative.LayoutAnimation;

  const styles = StyleSheet.create({
        textColor: {
          color: "#F00"
        }
  }); 

  class Test extends React.Component {
    render(){
      return (
          <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center'}}>
            <Text style={styles.textColor}> Hello from {this.props.url}</Text>
          </View>
      );
    }
  }

  return Test
});
