<template>
  <div>
    <h1>If you found this, well done? It's not finished yet ;)</h1>
    <h1>this is blog 1</h1>
    <div>I've previously written about my Witch's House project, which included a fun mechanic I created that let players rotate their phone to look around the game area. There's videos describing that in full can be found here along with the full code for that system. Between that and our moving camera system that Tish (https://twitter.com/tishgraham) wrote, we used a lot of lerping and slerp to move cameras around. A shorter snippet of this is shown below. You'll just have to use your intuition for the variables, hopefully they're clearly named!</div>
    <div>
      <!-- <VueEmbedGist gist-id="3a97d818f66aaafcbe09dabbe73ed1bb" file="PhoneRotation.cs"/> -->
      
    </div>
    <div>Lerp performs Linear Interpolation, finding the value that is c% between a and b. In the code above I use Quaternion.Slerp(a,b,c), which is basically the same as the normal Mathf.lerp(a,b,c), except it performs spherical interpolation to find the rotation. The basic theory is the same though, c% between a and b. It seems like many developers are using lerp wrong though, which is understandable as the Unity documentation labels the method signature as Lerp(float a, float b, float t). Because lerp is often used in the context of an update loop where we often use Time.deltaTime it’s a sensible leap to equate the argument twith time. It’s very common to see code like this:</div>

    <div>This is unwise however, as transform.position will APPROACH the given target.position but it won’t actually reach it. This might often be followed by some condition checking how close transform.position is to target.position. I've written this many times! This post by Rory Driscoll argues that developers who make this mistake are actually performing something very similar to Exponential Decay, whether they are aware of it’s existence or not. Instead, this forum post by user BlueRaja explains the correct use of lerp in a clearer fashion than the documentation.</div>
    <div>Something something AnimationCurve</div>
    <div>A useful an easily editable alternative are animation curves. AnimationCurve can be utilised for all manner of things that require changing a float value over time.</div>

    <div>Declaring a public AnimationCurve will allow users to create complicated and detailed curves for a variety of reasons.</div>

    <div>These curves represent a mathematical formula, hidden from the user, and plot the Y value as X changes. This formula can be accessed using curve.Evaluate(float). This returns the value of Y at the provided X argument value. This was employed to create a smooth transition between the rotation the player has provided when moving their phone around and the rotation the game would like to return to. This allowed me to avoid the issues described by Driscoll and follow the advice of BlueRaj’s forum post to get the most out of lerping.</div>

    <div>Using an AnimationCurve is much more flexible and elegant than creating a complex loop wherein a programmer writes a formula themselves and uses Time.deltaTime. AnimationCurve is also more accessible to designers, as it doesn’t require them to read or write code or ask an engineer to change the formula.</div>
  </div>
</template>

<script>
// import CodeExample from "~/components/CodeExample.vue";
import VueEmbedGist from "vue-embed-gist-nojquery";

export default {
  name: "blog-1",
  // components: { VueEmbedGist },
  data: function() {
    return {
    };
  }
};
</script>

<style>
</style>