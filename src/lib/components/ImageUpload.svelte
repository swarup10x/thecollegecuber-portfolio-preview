<script>
    import { onMount } from "svelte";

    let fileInput;
    let previewUrl = "";
    let uploadStatus = "";
    let uploadProgress = 0;

    export let loadImages

    function handleFileSelect(event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewUrl = e.target.result;
            };
            reader.readAsDataURL(file);
        } else {
            previewUrl = "";
            uploadStatus = "Select an image file.";
        }
    }

    

    async function uploadImage() {
        if (!fileInput.files[0]) {
            uploadStatus = "Please select a file.";
            return;
        }

        const formData = new FormData();
        formData.append("image", fileInput.files[0]);

        try {
            uploadStatus = "Uploading...";
            const response = await fetch("https://thecollegecuber.devconsort.com:3099//api/images", {
                method: "POST",
                body: formData,
                onUploadProgress: (progressEvent) => {
                    uploadProgress = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total,
                    );
                },
            });

            if (!response.ok) throw new Error("Upload failed");

            const result = await response.json();
            uploadStatus = "Upload successful!";
            console.log("File path:", result.filePath);
            loadImages()
        } catch (error) {
            uploadStatus = `Upload failed: ${error.message}`;
        } finally {
            uploadProgress = 0;
        }
    }

    onMount(() => {
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    });
</script>

<div class="wrapper">
    <div class="preview">
        {#if previewUrl}
            <img class="preview-image" src={previewUrl} alt="Preview" />
        {/if}
    </div>

    <div class="image-upload">
        <label for="file-upload" class="custom-file-upload">
            Choose Image
        </label>
        <input
        
            id="file-upload"
            type="file"
            accept="image/*"
            on:change={handleFileSelect}
            bind:this={fileInput}
        />

        <button on:click={uploadImage}>Upload Image</button>

        {#if uploadStatus}
            <div>{uploadStatus}</div>
        {/if}

        {#if uploadProgress > 0}
            <progress value={uploadProgress} max="100"></progress>
        {/if}
    </div>
</div>

<style>
    .wrapper {
        display: flex;
        max-width: 340px;
        align-items: center;
        justify-content: center;
        gap: 20px;
        margin: 10px;
        
        

    }
    input[type="file"] {
        display: none;
    }

    .custom-file-upload {
        border: 1px solid #ccc;
        display: inline-block;
        padding: 6px 12px;
        cursor: pointer;
    }
    .image-upload {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .preview {
        width: 136px;
        height: 120px;
        border: 1px solid gray;
        border-radius: 4px;
        overflow: hidden;
        background-color: #e7e7e7;
    }

    .preview img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    progress {
        width: 100%;
    }

    button{
        padding: 4px 8px;
        background-color: #545470;
        color: white;
    }

    button:hover{
        background-color: #494966;
    }
</style>
