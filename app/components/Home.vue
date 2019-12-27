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
            <Label class="action-bar-title" text="Home"></Label>
        </ActionBar>
       <ScrollView>
            <StackLayout  class="page-content">
                <Label class="page-title-1" text="Cursos" />
                <Label class="page-title-2" text="Estadisticas" />
                <GridLayout columns="*, 2*" rows="auto">
                    <!-- <CircularProgressBar :size="80" :progress="progress[3]" row="0" col="0"/> -->
                    <StackLayout  row="0" col="1">
                        <Label text="Tiene un 0% de avance en el total de cursos disponibles." textWrap="true"/>
                        <Label text="Cursos Sin Iniciar: 1"/>
                        <Label text="Cursos Completados: 0"/>
                        <Label text="Cursos Totales: 1" textWrap="true"/>
                    </StackLayout>
                </GridLayout>
                <Label class="page-title-2" text="Nuevos" />
                <GridLayout columns="*, 2*" rows="auto" class="itemStack">
                    <!-- <CircularProgressBar :size="80" :progress="progress[0]" row="0" col="0"/> -->
                    <StackLayout  row="0" col="1">
                        <Label text="Curso: Conoce las worstations" textWrap="true"/>
                        <Label text="Total de preguntas: 10"/>
                        <Label text="Publicado: 03/07/2019"/>
                    </StackLayout>
                </GridLayout>
                <GridLayout columns="*, 2*" rows="auto" class="itemStack">
                    <!-- <CircularProgressBar :size="80" :progress="progress[1]" row="0" col="0"/> -->
                    <StackLayout  row="0" col="1">
                        <Label text="Curso: Aprende de los nuevos productos" textWrap="true"/>
                        <Label text="Total de preguntas: 10"/>
                        <Label text="Publicado: 03/07/2019"/>
                    </StackLayout>
                </GridLayout>
                <GridLayout columns="*, 2*" rows="auto" class="itemStack">
                    <!-- <CircularProgressBar :size="80" :progress="progress[2]" row="0" col="0"/> -->
                    <StackLayout  row="0" col="1">
                        <Label text="Curso: Las mejors ultrabooks" textWrap="true"/>
                        <Label text="Total de preguntas: 10"/>
                        <Label text="Publicado: 03/07/2019"/>
                    </StackLayout>
                </GridLayout>
                <Label class="page-title-1" text="Noticias" />
                <GridLayout columns="*, 2*" rows="auto" class="itemStack">
                    <Label class="page-icon fa" text.decode="&#xf015;"></Label>
                    <StackLayout  row="0" col="1">
                        <Label text="Cumpleaños del Mes" textWrap="true"/>
                        <Label text="¡No olvides felicitar a los Cumpleañeros de Julio!"/>
                        <Label text="Publicado: 03/07/2019"/>
                    </StackLayout>
                </GridLayout>
                <GridLayout columns="*, 2*" rows="auto" class="itemStack">
                    <Label class="page-icon fa" text.decode="&#xf015;"></Label>
                    <StackLayout  row="0" col="1">
                        <Label text="Cumpleaños del Mes" textWrap="true"/>
                        <Label text="¡No olvides felicitar a los Cumpleañeros de Julio!"/>
                        <Label text="Publicado: 03/07/2019"/>
                    </StackLayout>
                </GridLayout>
                <!-- <Label class="page-icon fa" text.decode="&#xf015;"></Label>
                <Label class="page-placeholder" :text="message"></Label>
                <Label class="page-placeholder" :text="message"></Label> -->
            </StackLayout >
        </ScrollView>
    </Page>
</template>

<script>
    import Vue from "nativescript-vue";
    import RadGauge from "nativescript-ui-gauge/vue";
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    // import CircularProgressBar from './CircularProgressBar';
    Vue.use(RadGauge);

    export default {
        data(){
            return {
                size: [this.random(), this.random(), this.random()],
                progress: [
                    this.random(0, 100),
                    this.random(0, 100),
                    this.random(0, 100),
                    this.random(0, 100)
                ]
            }
        },
        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Home");
        },
        computed: {
            message() {
                return "<!-- Page content goes here -->";
            }
        },
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer();
            },
             random(min = 50, max = 150) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            },
        },
        // components: { CircularProgressBar }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables

    // Custom styles
    .itemStack{
        padding-top:20px;
    }
</style>