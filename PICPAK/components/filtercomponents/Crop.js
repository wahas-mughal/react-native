// Compute the boundaries of a gesture from a left corner
setLeft(left: number) {
  if (left <= 0) {
    this.position.left = 0;
  } else if (left >= (this.widthBoundary - this.position.right)) {
    this.position.left = this.widthBoundary - this.position.right;
  } else {
    this.position.left = left;
  }
}

// Top Left PanResonder
this.topLeftResponder = PanResponder.create({
  onMoveShouldSetResponderCapture: () => true,
  onMoveShouldSetPanResponderCapture: () => true,
  onPanResponderMove: (e, gestureState) => {
    const {dx, dy} = gestureState;
    const left = this.lastKnownLeft + dx;
    const top = this.lastKnownTop + dy;
    this.setLeft(left);
    this.setTop(top);
    this.crop.setNativeProps({ style: this.position });
  },
  onPanResponderRelease: (e, gestureState) => {
    this.lastKnownLeft += gestureState.dx;
    this.lastKnownTop += gestureState.dy;
  },
  onPanResponderTerminate: (e, gestureState) => {
    this.lastKnownLeft += gestureState.dx;
    this.lastKnownTop += gestureState.dy;
  }
});