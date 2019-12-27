<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <!-- 
            Use the NavigationButton as a side-drawer button in Android
            because ActionItems are shown on the right side of the ActionBar
            -->
            <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap"></NavigationButton>
            <!-- 
            Use the ActionItem for IOS with position set to left. Using the
            NavigationButton as a side-drawer button in iOS is not possible,
            because its function is to always navigate back in the application.
            -->
            <ActionItem icon="res://navigation/menu" 
                android:visibility="collapsed" 
                @tap="onDrawerButtonTap"
                ios.position="left">
            </ActionItem>
            <Label class="action-bar-title" text="Curso"></Label>
        </ActionBar>
        <ScrollView>
            <StackLayout  class="page-content">
                <Label :text="questionIndicator"></Label>
                <Progress :value="20" />
                <!-- <CardView v-if="showCardView" v-for="item in items" class="card" elevation="40" radius="10" ios:shadowRadius="3">
					<StackLayout class="card-layout">
						<Label class="h2" :text="item.heading" />
						<Label class="body" textWrap="true" :text="item.content" />
					</StackLayout>
				</CardView> -->
                <!-- <GridLayout>
                    <Label class="question" :text="message" />
                </GridLayout> -->
                <input type="radio">radio</input>
                <Button text="Siguiente" class="btn btn-primary" />
            </StackLayout >
        </ScrollView>
    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    const { isAndroid } = require('tns-core-modules/platform');
    const isPlayground = false; // change this to show card view on android when building locally
    export default {
        data(){
            return {
                showCardView: !isAndroid || !isPlayground,
                items: [
                    { heading: "Pregunta:", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta lobortis sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sollicitudin ante. Ut consequat velit nec nibh convallis, hendrerit efficitur sem volutpat. Duis feugiat volutpat pellentesque. Maecenas interdum." },
                    // { heading: "Ivysaur", content: "To support its weight, Ivysaur’s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon." },
                    // { heading: "Venusaur", content: "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people." },
                    // { heading: "Charmander", content: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely." },
                    // { heading: "Charmeleon", content: "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color." },
                    // { heading: "Charizard", content: "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself." },
                    // { heading: "Squirtle", content: "Squirtle’s shell is not merely used for protection. The shell’s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds." },
                    // { heading: "Wartortle", content: "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon’s toughness as a battler." },
                    // { heading: "Blastoise", content: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet." }
                ]
            }
        },
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Browse");
        },
        computed: {
            message() {
                return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta lobortis sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at sollicitudin ante. Ut consequat velit nec nibh convallis, hendrerit efficitur sem volutpat. Duis feugiat volutpat pellentesque. Maecenas interdum";
            },
            questionIndicator() {
                return "Pregunta 1/5";
            }
        },
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer();
            }
        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables

    // Custom styles
    .question {
        color: $page-icon-color;
        font-size: $page-content-placeholder-font-size;
        vertical-align: center;
        // horizontal-align: center;
        background-color: gray;
        padding:100%;
        border-radius: 50%;
    }
</style>