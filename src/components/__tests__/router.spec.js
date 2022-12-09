import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import SongItem from "@/components/SongItem.vue";
import { expect } from "vitest";

describe("Router", () => {
  test("renders router link", () => {
    const song = {
      docID: "mockID",
    };
    const wrapper = shallowMount(SongItem, {
      propsData: { song },
      // Even we are testing the router, we are mocking it up
      global: {
        components: {
          "router-link": RouterLinkStub,
        },
      },
    });
    expect(wrapper.findComponent(RouterLinkStub).props().to).toEqual({
      name: "song",
      params: { id: song.docID },
    });
  });
});
