import SongItem from "@/components/SongItem.vue";
//A stub is a mook function, vitest comes with some of the Vue stubs
import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { expect } from "vitest";

describe("SongItem.vue", () => {
  test("render song.display_name", () => {
    // I put this not outside because each test ca change the component and affect the next tests
    // so it would be better to mount the component each time
    const song = {
      display_name: "Mocked test",
    };
    const wrapper = shallowMount(SongItem, {
      propsData: { song },
      global: { components: { "router-link": RouterLinkStub } },
    });
    const compositionAuthor = wrapper.find(".text-gray-500");
    expect(compositionAuthor.text()).toBe(song.display_name);

    //AVOID boolean assertions like this
    // expect(compositionAuthor.text() === song.display_name).toBe(false); //expected true to be false

    //This shows better error logs
    // expect(compositionAuthor.text()).toBe("false test"); //expected 'Mocked test' to be 'false test'
  });

  test("render song.docID in id attribute", () => {
    // I mount again the component
    const song = {
      docID: "exampletest",
    };
    const wrapper = shallowMount(SongItem, {
      propsData: { song },
      global: { components: { "router-link": RouterLinkStub } },
    });
    //if the target component has :id={"Mocked id"}
    // expect(wrapper.attributes().id).toBe(`song-id-${song.docID}`);
    //if the target element has dynamic :class / static class
    expect(wrapper.classes()).toContain(`song-id-${song.docID}`);
  });
});
