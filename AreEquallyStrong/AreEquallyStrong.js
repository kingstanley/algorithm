function areEquallyStrong(yourRight, yourLeft, friendRight, friendLeft) {
  //   if (
  //     (yourLeft == friendLeft || yourLeft == friendRight) &&
  //     (yourRight == friendRight || yourRight == friendLeft)
  //   ) {
  //     return true;
  //   }
  //   return false;

  // alternative Solution

  const yourStrongestArm = yourLeft >= yourRight ? yourLeft : yourRight;
  const yourWeakestArm = yourLeft <= yourRight ? yourLeft : yourRight;
  const friendWeakestArm = friendLeft <= friendRight ? friendLeft : friendRight;
  const friendStrongestArm =
    friendLeft >= friendRight ? friendLeft : friendRight;

  return (
    yourWeakestArm == friendWeakestArm && yourStrongestArm == friendStrongestArm
  );
}

console.log(areEquallyStrong(15, 10, 10, 15));
