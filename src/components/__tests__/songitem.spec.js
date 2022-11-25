import SongItem from "@/components/SongItem.vue";
//A stub is a mook function, vitest comes with some of the Vue stubs
import { shallowMount, RouterLinkStub } from "@vue/test-utils";

describe("SongItem.vue", () => {
  test("render song.display_name", () => {
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
});
