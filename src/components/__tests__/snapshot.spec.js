import { RouterLinkStub, shallowMount } from "@vue/test-utils";
import SongItem from "@/components/SongItem.vue";
import { describe, expect } from "vitest";

describe("Snapshots SongItem.vue", () => {
  test("renders correctly", () => {
    const song = {
      docID: "mockedID",
      modified_name: "test",
      display_name: "test",
      ccomment_count: 5,
    };
    const wrapper = shallowMount(SongItem, {
      propsData: { song },
      global: {
        components: {
          "router-link": RouterLinkStub,
        },
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});

// IMPORTANT: Ish I make a change in the component this test will fail, to update the snapshot I press the "u" key after the fail
